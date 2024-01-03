import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ImageItemProps {
  title: string;
  category: string;
  thumbnail: string;
  portoId: number;
  categoryId: number;
}
export default function ImageItem(props: ImageItemProps) {
  const { title, category, thumbnail, portoId, categoryId } = props;
  return (
    <div className="col-lg-3 col-md-6 colsm-12">
      <div className="portfolio__block p_relative">
        <div className="portfolio__image">
          <figure>
            <Image
              alt="turtles"
              src={thumbnail}
              width={300}
              height={300}
              loading="lazy"
            />
          </figure>
        </div>
        <div className="lower__content p_absolute">
          <div className="protfolio__text ">
            <div className="text__block">
              <h4>{title}</h4>
              <p>{category}</p>
            </div>
            <div className="text__block_two">
              <h5>2023</h5>
            </div>
          </div>
          <div className="protfolio__button ">
            <Link
              href={`/portfolio/${portoId}/${categoryId}}`}
              as={`/portfolio/${portoId}/${categoryId}`}
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
  );
}
