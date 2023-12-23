import React from "react";
import heroImage from "../assets/skincare-main.jfif";
import { useMediaQuery } from "@mui/material";

const Hero = ({ sanchez, roboto }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:639px)");

  const buttonStyle = {
    border: "1.5px solid #FFF",
    boxShadow: "0px 8px 8px 0px rgba(0, 0, 0, 0.12)",
    padding: "0.875rem 2.75rem",
  };

  const mobileButtonStyle = {
    border: "1.5px solid #FFF",
    boxShadow: "0px 8px 8px 0px rgba(0, 0, 0, 0.12)",
    padding: "0.75rem 2rem",
  };

  return (
    <div>
      {isNonMobileScreens ? (
        <div className="relative">
          <img
            src={heroImage}
            alt="hero-image"
            className="w-full h-auto max-h-[58.375rem] object-cover"
          />
          <div className="absolute inset-0 flex flex-col text-center text-white">
            <h1
              style={sanchez}
              className="pt-[12.5rem] sm:px-1.25rem lg:px-0 text-[3.75rem] max-w-[56.25rem] leading-[3.875rem] mx-auto"
            >
              Radiant Skincare: Achieving a Naturally Glowing Complexion
            </h1>
            <p
              style={roboto}
              className="text-[1.5rem] pt-[4.375rem] leading-[1.688rem] max-w-[46.875rem] mx-auto"
            >
              Our mission is to help you achieve a naturally radiant and glowing
              complexion through the use of high-quality, natural skincare
              products
            </p>

            <div
              style={buttonStyle}
              className="flex mt-[3.125rem] mx-auto hover:bg-black duration-200"
            >
              <h1 className="font-medium leading-6 px-0.125rem" style={roboto}>
                Shop now
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative">
          <img
            src={heroImage}
            alt="hero-image"
            className="w-full h-auto max-h-[58.375rem] object-cover"
          />
          <div className="absolute inset-0 flex flex-col text-center text-white px-4">
            <h1
              style={sanchez}
              className="text-xl pt-[7rem] max-w-[31.25rem] mx-auto font-black"
            >
              Radiant Skincare: Achieving a Naturally Glowing Complexion
            </h1>
            <p
              style={roboto}
              className="text-sm pt-[2.2rem] max-w-[18.75rem] mx-auto"
            >
              Our mission is to help you achieve a naturally radiant and glowing
              complexion through the use of high-quality, natural skincare
              products
            </p>

            <div
              style={mobileButtonStyle}
              className="flex mt-[2rem] mx-auto hover:bg-black duration-200"
            >
              <h1 className="font-medium px-0.125rem" style={roboto}>
                Shop now
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20
                12L14 18Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
