import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { data } from "autoprefixer";
import Image from "next/image";

export async function getStaticProps({ params }) {
  try {
    const id = params.porto_id;
    const page = 1; // Set the initial page
    const limit = 12; // Set the number of items per page
    const response = await fetch(
      `https://api.quantech.id/api/categories?porto_id=${id}&page=${page}&limit=${limit}`
    );
    const response2 = await fetch(
      `https://api.quantech.id/api/gallery?porto_id=${id}&page=${page}&limit=${limit}`
    );
    const { data: category } = await response.json();
    const { data: gallery } = await response2.json();

    return {
      props: {
        category,
        gallery,
        page,
        limit,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        category: null,
        gallery: null,
      },
    };
  }
}

export async function getStaticPaths() {
  try {
    const response = await fetch("https://api.quantech.id/api/categories");
    const category = await response.json();

    const paths = category.data.map((item) => ({
      params: { porto_id: item.id.toString() },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
}

const Filter = ({ category, gallery, page, limit }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(page);
  const [currentGallery, setGallery] = useState(gallery);
  const [currentCategory, setCategory] = useState(category[0]);

  const totalPages = Math.ceil(currentGallery.total / limit);
  const handlePagination = async (newPage) => {
    try {
      const id = router.query.id;
      const id2 = router.query.category_id;
      const response = await fetch(
        `https://api.quantech.id/api/gallery?category_id=${id2}&page=${newPage}&limit=12`
      );
      const { data: newGallery } = await response.json();

      // Update the gallery state using setGallery
      setGallery(newGallery);
      setCurrentPage(newPage);

      // Update the URL if needed
      await router.push(`/portfolio/${id}/${id2}?page=${newPage}`, undefined, {
        shallow: true,
      });

      // You can also dispatch an action to update Redux store if needed
      // Example: dispatch({ type: 'UPDATE_GALLERY', payload: { newGallery, pagination } });
    } catch (error) {
      console.error("Error fetching paginated data:", error);
    }
  };

  const handleRoutes = async (newPage, newPortoId, newCategoryId) => {
    try {
      // Check if category_id or porto_id changed
      const categoryChanged = currentCategory.id !== newCategoryId;
      const portoChanged = currentCategory.porto_id !== newPortoId;

      // If category_id or porto_id changed, reset page to 1
      const resetPage = categoryChanged || portoChanged;

      const response = await fetch(
        `https://api.quantech.id/api/gallery?category_id=${newCategoryId}&porto_id=${newPortoId}&page=${
          resetPage ? 1 : newPage
        }&limit=${limit}`
      );
      const { data: newGallery } = await response.json();

      // Update the category and gallery state
      setCategory(newCategoryId);
      setGallery(newGallery);
      setCurrentPage(resetPage ? 1 : newPage);

      // Update the URL without the page parameter if it's not needed
      const urlWithoutPage = resetPage ? "" : `?page=${newPage}`;
      await router.push(
        `/portfolio/${newPortoId}/${newCategoryId}${urlWithoutPage}`,
        undefined,
        {
          shallow: true,
        }
      );

      // You can also dispatch an action to update Redux store if needed
      // Example: dispatch({ type: 'UPDATE_CATEGORY_AND_GALLERY', payload: { newPortoId, newCategoryId, newGallery, pagination } });
    } catch (error) {
      console.error("Error fetching paginated data:", error);
    }
  };

  const handleClick = (portoId, categoryId) => {
    handleRoutes(1, portoId, categoryId);
  };

  const handleAll = (id) => {
    router.push("/portfolio/filter/[porto_id]", `/portfolio/filter/${id}`);
  };

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* page-title */}
      <section className="page__title p_relative">
        <div
          className="bg-layer"
          style={{
            backgroundImage: "url(/assets/images/resource/page-title-bg.jpg)",
          }}
        />
        <div className="auto-container">
          <div className="content__box p_relative">
            <ul className="bread__crumb">
              <li>
                <a href="index.html">Home </a>
              </li>
              <li>
                {" "}
                <span> -</span>Projects{" "}
              </li>
            </ul>
            <h1 className="title">
              {category.length > 0 &&
                category[0].porto &&
                category[0].porto.name}
            </h1>
          </div>
        </div>
      </section>
      {/* page-title end*/}
      <div class="portfolio__menu">
        {/* <button onClick={() => handleAll(category[0].porto_id)} class="active" data-filter="*">
                    SEE ALL
                </button> */}

        {category.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.porto_id, item.id)}
            data-filter=".cat1"
            className={currentCategory.id === item.id ? "active" : ""}
          >
            {item.name}
          </button>
        ))}
      </div>
      {/* project-page */}
      <div className="project__page p_relative see__pad">
        <div className="row">
          {currentGallery.data.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="portfolio__block p_relative">
                <div className="portfolio__image">
                  <figure>
                    <Image
                      alt="turtles"
                      src={item.url}
                      width={300}
                      height={300}
                      loading="lazy"
                    />
                  </figure>
                </div>
                <div className="lower__content p_absolute">
                  <div className="protfolio__text ">
                    <div className="text__block">
                      <h4>{item.category.name}</h4>
                      <p>Design</p>
                    </div>
                    <div className="text__block_two">
                      <h5>2019</h5>
                    </div>
                  </div>
                  <div className="protfolio__button ">
                    <Link
                      href={`/portfolio/[id]/[category_id]`}
                      as={`/portfolio/${item.category.porto_id}/${item.category_id}`}
                      className="theme-btn theme-btn-one"
                    >
                      Read More
                      <i className="icon-02" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* pricing-page end*/}
      <div className="row justify-content-center">
        <div className="swiper__button">
          <div className="button_next">
            <button
              onClick={() => handlePagination(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <i className="icon-06" />
            </button>
          </div>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePagination(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
              style={{ color: "white" }}
            >
              {index + 1}
            </button>
          ))}
          <div className="button_prev">
            <button
              onClick={() => handlePagination(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <i className="icon-05" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
