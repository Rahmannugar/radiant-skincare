import React from "react";
import diagonal from "../assets/diagonal.png";
import pipette from "../assets/pipette.png";
import { useMediaQuery } from "@mui/material";

const About = ({ roboto, sanchez }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const mobileButtonStyle = {
    border: "1px solid var(--Black, #000)",
  };
  return (
    <div>
      {isNonMobileScreens ? (
        <div></div>
      ) : (
        <div className="text-center px-10">
          <h1 className="font-semibold leading-6 text-xl pb-16" style={roboto}>
            About us
          </h1>
          <div className="relative">
            <img src={diagonal} alt="diagonal" />
            <img
              src={pipette}
              alt="pipette"
              className="absolute top-[90%] left-[80%] transform -translate-x-1/2 -translate-y-1/2 h-2/5  w-2/4"
            />
          </div>

          <div className="pt-20 flex flex-col items-center">
            <svg
              width="47"
              height="48"
              viewBox="0 0 47 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Icon / Relume">
                <path
                  id="Vector"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M40.46 14.24L40.18 13.74C39.8188 13.1354 39.3094 12.6329 38.7 12.28L25.28 4.54C24.6724 4.1875 23.9826 4.00124 23.28 4H22.7C21.9974 4.00124 21.3076 4.1875 20.7 4.54L7.28 12.3C6.67394 12.6505 6.17052 13.1539 5.82 13.76L5.54 14.26C5.1875 14.8677 5.00124 15.5575 5 16.26V31.76C5.00124 32.4626 5.1875 33.1524 5.54 33.76L5.82 34.26C6.17958 34.859 6.68098 35.3604 7.28 35.72L20.72 43.46C21.3246 43.8198 22.0164 44.0066 22.72 44H23.28C23.9826 43.9988 24.6724 43.8126 25.28 43.46L38.7 35.7C39.312 35.3574 39.8174 34.852 40.16 34.24L40.46 33.74C40.8082 33.1306 40.9942 32.442 41 31.74V16.24C40.9988 15.5375 40.8126 14.8477 40.46 14.24ZM22.7 8H23.28L35 14.76L23 21.68L11 14.76L22.7 8ZM25 39L36.7 32.24L37 31.74V18.22L25 25.16V39Z"
                  fill="#78A8B0"
                />
              </g>
            </svg>
            <h1 className="text-2xl py-5 font-bold" style={sanchez}>
              Natural ingredients
            </h1>
            <p style={roboto}>
              Natural and environmentally-friendly ingredients. Trust us to
              nourish and protect your skin with the best nature has to offer.
            </p>
          </div>

          <div className="pt-10 pb-10 flex flex-col items-center">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Icon / Relume">
                <path
                  id="Vector"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M41.46 14.24L41.18 13.74C40.8188 13.1354 40.3094 12.6329 39.7 12.28L26.28 4.54C25.6724 4.1875 24.9826 4.00124 24.28 4H23.7C22.9974 4.00124 22.3076 4.1875 21.7 4.54L8.28 12.3C7.67394 12.6505 7.17052 13.1539 6.82 13.76L6.54 14.26C6.1875 14.8677 6.00124 15.5575 6 16.26V31.76C6.00124 32.4626 6.1875 33.1524 6.54 33.76L6.82 34.26C7.17958 34.859 7.68098 35.3604 8.28 35.72L21.72 43.46C22.3246 43.8198 23.0164 44.0066 23.72 44H24.28C24.9826 43.9988 25.6724 43.8126 26.28 43.46L39.7 35.7C40.312 35.3574 40.8174 34.852 41.16 34.24L41.46 33.74C41.8082 33.1306 41.9942 32.442 42 31.74V16.24C41.9988 15.5375 41.8126 14.8477 41.46 14.24ZM23.7 8H24.28L36 14.76L24 21.68L12 14.76L23.7 8ZM26 39L37.7 32.24L38 31.74V18.22L26 25.16V39Z"
                  fill="#376BF3"
                />
              </g>
            </svg>

            <h1 className="text-2xl py-5 font-bold" style={sanchez}>
              Effective results
            </h1>
            <p style={roboto}>
              Effective skincare products that deliver on their promises. Our
              brand highlights effectiveness through customer testimonials and
              clinical studies.
            </p>
          </div>

          <button
            style={mobileButtonStyle}
            className="flex justify-between mx-auto py-3 px-5 space-x-4 mb-48"
          >
            <h1 style={roboto} className="">
              Shop now
            </h1>
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
      )}
    </div>
  );
};

export default About;
