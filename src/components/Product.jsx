import React from "react";
import product1 from "../assets/product-1.png";
import product2 from "../assets/product-2.png";
import product3 from "../assets/product-3.png";
import product4 from "../assets/product-4.png";
import product5 from "../assets/product-5.png";
import product6 from "../assets/product-6.png";

const Product = ({ roboto, sanchez }) => {
  const productData = [
    {
      id: 1,
      src: product1,
      text: "Gentle Cleansing Gel",
      sub: "Gel",
      price: "$20",
    },
    {
      id: 2,
      src: product2,
      text: "Refreshing Toner Mist",
      sub: "Toner",
      price: "$25",
    },
    {
      id: 3,
      src: product3,
      text: "Brightening Serum",
      sub: "Serum",
      price: "$30",
    },
    {
      id: 4,
      src: product4,
      text: "Deep Hydration Moisturizer",
      sub: "Moisturizer",
      price: "$30",
    },
    {
      id: 5,
      src: product5,
      text: "Detoxifying Clay Mask",
      sub: "Clay Mask",
      price: "$20",
    },
    {
      id: 6,
      src: product6,
      text: "Revitalizing Eye Cream",
      sub: "Eye Cream",
      price: "$35",
    },
  ];
  const cartButtonStyle = {
    border: "1px solid #78A8B0",
  };

  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:px-5 lg:px-[20px] xl:px-[50px]">
      {productData.map((product) => (
        <div className="flex flex-col px-10 sm:px-5">
          <img
            src={product.src}
            alt={product.id}
            key={product.id}
            className="bg-[#ECF3F4] hover:bg-[#78A8B0] duration-200 ease-in mt-16 mb-5 py-10"
          />

          <div className="space-y-2">
            <div className="flex justify-between">
              <h1 style={sanchez} className="font-black">
                {product.text}
              </h1>
              <h1 style={roboto} className="font-black">
                {product.price}
              </h1>
            </div>
            <p style={roboto} className="text-sm">
              {product.sub}
            </p>
          </div>
          <button
            style={cartButtonStyle}
            className="py-2 mt-5 hover:bg-[#78A8B0] text-[#78A8B0] hover:text-white duration-200"
          >
            <h1 style={roboto}>Add to cart</h1>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;
