import React from "react";
import Product from "./Product";

const Products = ({ roboto, sanchez }) => {
  const mobileButtonStyle = {
    border: "1px solid var(--Black, #000)",
  };
  return (
    <div className="py-28">
      <div className="px-5 md:px-10 xl:px-[70px] space-y-7 md:space-y-4 pb-5">
        <h1
          className="font-semibold text-xl text-center md:text-justify md:text-2xl lg:leading-[57.6px] lg:text-4xl xl:text-5xl max-w-[768px]"
          style={sanchez}
        >
          Nourish and Protect Your Skin with Our Skincare Products
        </h1>
        <div className="sm:flex justify-between">
          <p
            className="px-5 md:pr-16 md:px-0 lg:text-[18px] max-w-[768px]"
            style={roboto}
          >
            Explore our collection of natural skincare products designed to
            nourish and protect your skin.
          </p>
          <button
            style={mobileButtonStyle}
            className="sm:flex justify-between sm:mr-5 md:mr-0  py-3 px-5 space-x-7 lg:py-[12px] lg:px-[24px] hidden whitespace-nowrap"
          >
            <h1 style={roboto}>View all</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="black"
            >
              <path
                d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20
                12L14 18Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>

      <Product roboto={roboto} sanchez={sanchez} />
    </div>
  );
};

export default Products;
