import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export async function getStaticProps() {
  try {
    const [res, res2] = await Promise.all([
      fetch("https://api.quantech.id/api/gallery").then((res) => res.json()),
      fetch("https://api.quantech.id/api/porto").then((res) => res.json()),
    ]);

    const { data: gallery } = res;
    const { data: porto } = res2;

    return {
      props: {
        gallery,
        porto,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        category: null,
        porto: null,
      },
    };
  }
}

export default function portfolio({ gallery, porto }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const getRandomGalleryUrl = (categoryId) => {
    const categoryGallery = gallery.filter(
      (item) => item.category_id === categoryId
    );
    if (categoryGallery.length > 0) {
      const randomIndex = Math.floor(Math.random() * categoryGallery.length);
      const { url, category } = categoryGallery[randomIndex];
      return {
        category_id: categoryId,
        url,
        name: category.name,
        porto_id: category.porto_id,
      };
    }
    return null;
  };

  // Mendapatkan satu URL acak per category_id dari galeri
  const uniqueGalleryUrls = Array.from(
    new Set(gallery.map((item) => item.category_id))
  ).map((categoryId) => getRandomGalleryUrl(categoryId));

  const handleClick = (id) => {
    router.push("/portfolio/filter/[porto_id]", `/portfolio/filter/${id}`);
  };

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
            <h1 className="title">Projects</h1>
          </div>
        </div>
      </section>
      {/* page-title end*/}
      <div class="portfolio__menu">
        <button class="active" data-filter="*">
          SEE ALL
        </button>
        {porto.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            data-filter=".cat1"
            class=""
          >
            {item.name}
          </button>
        ))}
      </div>
      {/* project-page */}
      <div className="project__page p_relative see__pad">
        <div className="row">
          {uniqueGalleryUrls.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <div className="col-lg-3 col-md-6 colsm-12">
              <div className="portfolio__block p_relative">
                <div className="portfolio__image">
                  <figure>
                    <img src={item.url} alt="" />
                  </figure>
                </div>
                <div className="lower__content p_absolute">
                  <div className="protfolio__text ">
                    <div className="text__block">
                      <h4>{item.name}</h4>
                      <p>Design</p>
                    </div>
                    <div className="text__block_two">
                      <h5>2019</h5>
                    </div>
                  </div>
                  <div className="protfolio__button ">
                    <Link
                      href={`/portfolio/[id]/[category_id]`}
                      as={`/portfolio/${item.porto_id}/${item.category_id}`}
                      className="theme-btn theme-btn-one"
                    >
                      {" "}
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
            <i className="icon-06" />
          </div>
          <div className="button_prev">
            <i className="icon-05" />
          </div>
        </div>
      </div>
    </>
  );
}
