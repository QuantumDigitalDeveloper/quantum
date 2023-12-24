import React from "react";
import ImagePorto from "../../components/organisms/ImagePorto";
import FilterList from "../../components/organisms/FilterList";
import Filter from "./[id]/[category_id]";

// export async function getStaticProps() {
//   try {
//     const [res, res2] = await Promise.all([
//       fetch("https://api.quantech.id/api/gallery").then((res) => res.json()),
//       fetch("https://api.quantech.id/api/porto").then((res) => res.json()),
//     ]);

//     const { data: gallery } = res;
//     const { data: porto } = res2;

//     return {
//       props: {
//         gallery,
//         porto,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return {
//       props: {
//         category: null,
//         porto: null,
//       },
//     };
//   }
// }

export default function portfolio({ gallery, porto }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const router = useRouter();

  // const getRandomGalleryUrl = (categoryId) => {
  //   const categoryGallery = gallery.filter(
  //     (item) => item.category_id === categoryId
  //   );
  //   if (categoryGallery.length > 0) {
  //     const randomIndex = Math.floor(Math.random() * categoryGallery.length);
  //     const { url, category } = categoryGallery[randomIndex];
  //     return {
  //       category_id: categoryId,
  //       url,
  //       name: category.name,
  //       porto_id: category.porto_id,
  //     };
  //   }
  //   return null;
  // };

  // // Mendapatkan satu URL acak per category_id dari galeri
  // const uniqueGalleryUrls = Array.from(
  //   new Set(gallery.map((item) => item.category_id))
  // ).map((categoryId) => getRandomGalleryUrl(categoryId));

  
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
      <FilterList />
      {/* project-page */}
      <ImagePorto />
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