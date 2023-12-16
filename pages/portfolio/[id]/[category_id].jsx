import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";


export async function getStaticProps({params}) {
  try {
    const id = params.id;
    const id2 = params.category_id;
    const response = await fetch("https://api.quantech.id/api/categories?porto_id=" + id);
    const response2 = await fetch("https://api.quantech.id/api/gallery?category_id=" + id2);
    const { data: category } = await response.json();
    const { data: gallery } = await response2.json();

    // console.log("Data fetched successfully:", category);

    return {
      props: {
        category,
        gallery,
      },

    };

  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        category: null,
      },
    };
  }
}

export async function getStaticPaths() {
     const response = await fetch("https://api.quantech.id/api/categories");
        const category = await response.json();
        const paths = category.data.map((item) => ({
            params: { id: item.porto_id.toString(), category_id: item.id.toString()},
        }));
        return { paths, fallback: true };
}


const Filter = ({ category, gallery }) => {
  const router = useRouter();

  const handleClick = (id, id2) => {
      router.push('/portfolio/[id]/[category_id]', `/portfolio/${id}/${id2}`);
  };

    const handleAll = (id) => {
        router.push('/portfolio/filter/[porto_id]', `/portfolio/filter/${id}`);
    }

  if (router.isFallback) {
    return <div>Loading...</div>
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
            <h1 className="title">{category.length > 0 && category[0].porto && category[0].porto.name}</h1>
          </div>
        </div>
      </section>
      {/* page-title end*/}
          <div class="portfolio__menu">
          <button onClick={() => handleAll(category[0].porto_id)} className="active" data-filter="*">
              SEE ALL
          </button>
          {category.map((item) => (
            <button  key={item.id} onClick={() => handleClick(item.porto_id, item.id)} data-filter=".cat1" className="">
              {item.name}
            </button>
        ))}
      </div>
      {/* project-page */}
      <div className="project__page p_relative see__pad">
        <div className="row">
            {gallery.length > 0 && gallery.map((item) => (
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
                        <h4>{item.category.name}</h4>
                        <p>Design</p>
                      </div>
                      <div className="text__block_two">
                        <h5>2019</h5>
                      </div>
                    </div>
                    <div className="protfolio__button ">
                      <Link
                          href="/portfolio/filter/design"
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

export default Filter;