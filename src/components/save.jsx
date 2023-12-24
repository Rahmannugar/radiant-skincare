import React from "react";
import model from "../assets/model.png";
import { useMediaQuery } from "@mui/material";
import result1 from "../assets/result-1.png";
import result2 from "../assets/result-2.png";
import result3 from "../assets/result-3.png";

const Result = ({ roboto, sanchez }) => {
  const isMobile = useMediaQuery("(min-width:0px) and (max-width:1023px)");
  const isOneThousand = useMediaQuery(
    "(min-width:1024px) and (max-width:1100px)"
  );
  const isOneThousandOne = useMediaQuery(
    "(min-width:1101px) and (max-width:1247px)"
  );
  const isOneThousandTwo = useMediaQuery(
    "(min-width:1248px) and (max-width:1300px)"
  );
  const isNonMobileScreens = useMediaQuery(
    "(min-width:1301px) and (max-width:2500px)"
  );
  return (
    <div className="py-12">
      {isMobile && (
        <div className="px-5">
          <h1
            style={sanchez}
            className="text-xl md:text-2xl text-center font-black"
          >
            Real Results from Real Customers
          </h1>
          <div className="flex flex-col items-center sm:flex-row mt-5">
            <img
              src={model}
              alt="Sarah-Simson"
              className="px-5 py-5 sm:px-10 sm:py-10 md:w-2/4 w-[400px] sm:h-[400px] rounded-full"
            />
            <div className="sm:mt-[5%] md:mt-[10%] md:px-5 mt-[-10px]">
              <h3 style={roboto} className="font-semibold text-sm mb-1">
                Sarah Simson
              </h3>
              <h3 style={roboto} className="text-sm text-black text-opacity-60">
                @sarahsimson
              </h3>
              <p className="mt-3" style={sanchez}>
                “I noticed significant improvement in my skin tone and texture
                after using the Brightening Serum for a month. My acne scars
                have faded and my skin looks healthier and radiant. It's made
                with natural ingredients and is now a staple in my skincare
                routine.”
              </p>
            </div>
          </div>
        </div>
      )}

      {isOneThousand && (
        <div className="">
          <div className="2xl:flex 2xl:justify-center 2xl:items-center 2xl:text-center">
            <h1
              style={sanchez}
              className="max-w-[560px] xl:text-5xl lg:text-4xl 2xl:text-5xl leading-[57.6px]"
            >
              Real Results from Real Customers
            </h1>
          </div>
          <div className="flex justify-center items-center  mt-24">
            <img
              src={model}
              alt="Sarah Simson"
              className="w-[380px] h-[460px]"
            />
            <div className="">
              <div className="text-center mx-auto max-w-[551px] py-[4.2vh]">
                <p className="px-16 pb-2" style={sanchez}>
                  “I noticed significant improvement in my skin tone and texture
                  after using the Brightening Serum for a month. My acne scars
                  have faded and my skin looks healthier and radiant. It's made
                  with natural ingredients and is now a staple in my skincare
                  routine.”
                </p>
                <h3 style={roboto} className="font-semibold">
                  Sarah Simson
                </h3>
                <h3 style={roboto} className="text-black text-opacity-60">
                  @sarahsimson
                </h3>
              </div>
              <div className="flex ">
                <img
                  src={result1}
                  alt="result-1"
                  className="w-[33%] h-[200px]"
                />
                <img
                  src={result2}
                  alt="result-2"
                  className="w-[33%] h-[200px]"
                />
                <img
                  src={result3}
                  alt="result-3"
                  className="w-[33%] h-[200px]"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {isOneThousandOne && (
        <div className="xl:px-[70px] lg:px-10">
          <div className="2xl:flex 2xl:justify-center 2xl:items-center 2xl:text-center">
            <h1
              style={sanchez}
              className="max-w-[560px] xl:text-5xl lg:text-4xl 2xl:text-5xl leading-[57.6px]"
            >
              Real Results from Real Customers
            </h1>
          </div>
          <div className="flex 2xl:justify-center 2xl:items-center  mt-24">
            <img
              src={model}
              alt="Sarah Simson"
              className="w-[380px] h-[460px]"
            />
            <div className="">
              <div className="text-center mx-auto max-w-[551px] xl:py-[7.45vh]">
                <p className="xl:px-16" style={sanchez}>
                  “I noticed significant improvement in my skin tone and texture
                  after using the Brightening Serum for a month. My acne scars
                  have faded and my skin looks healthier and radiant. It's made
                  with natural ingredients and is now a staple in my skincare
                  routine.”
                </p>
                <h3 style={roboto} className="font-semibold">
                  Sarah Simson
                </h3>
                <h3 style={roboto} className="text-black text-opacity-60">
                  @sarahsimson
                </h3>
              </div>
              <div className="flex">
                <img
                  src={result1}
                  alt="result-1"
                  className="w-[70%] h-[200px]"
                />
                <img
                  src={result2}
                  alt="result-2"
                  className="w-[70%] h-[200px]"
                />
                <img
                  src={result3}
                  alt="result-3"
                  className="w-[70%] h-[200px]"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {isOneThousandTwo && (
        <div className="xl:px-[70px] lg:px-10">
          <div className="2xl:flex 2xl:justify-center 2xl:items-center 2xl:text-center">
            <h1
              style={sanchez}
              className="max-w-[560px] xl:text-5xl lg:text-4xl 2xl:text-5xl leading-[57.6px]"
            >
              Real Results from Real Customers
            </h1>
          </div>
          <div className="flex 2xl:justify-center 2xl:items-center  mt-24">
            <img
              src={model}
              alt="Sarah Simson"
              className="xl:w-[520px] max-h-[100%]"
            />
            <div className="">
              <div className="text-center mx-auto max-w-[551px] xl:py-[7.45vh]">
                <p className="xl:px-16" style={sanchez}>
                  “I noticed significant improvement in my skin tone and texture
                  after using the Brightening Serum for a month. My acne scars
                  have faded and my skin looks healthier and radiant. It's made
                  with natural ingredients and is now a staple in my skincare
                  routine.”
                </p>
                <h3 style={roboto} className="font-semibold">
                  Sarah Simson
                </h3>
                <h3 style={roboto} className="text-black text-opacity-60">
                  @sarahsimson
                </h3>
              </div>
              <div className="flex">
                <img
                  src={result1}
                  alt="result-1"
                  className="xl:w-[220px] max-h-[260px]"
                />
                <img
                  src={result2}
                  alt="result-2"
                  className="xl:w-[220px] max-h-[260px]"
                />
                <img
                  src={result3}
                  alt="result-3"
                  className="xl:w-[220px] max-h-[260px]"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {isNonMobileScreens && (
        <div className="xl:px-[70px] lg:px-10">
          <div className="2xl:flex 2xl:justify-center 2xl:items-center 2xl:text-center">
            <h1
              style={sanchez}
              className="max-w-[560px] xl:text-5xl lg:text-4xl 2xl:text-5xl leading-[57.6px]"
            >
              Real Results from Real Customers
            </h1>
          </div>
          <div className="flex  mt-24">
            <img
              src={model}
              alt="Sarah Simson"
              className="w-[510px] h-[620px]"
            />
            <div className="">
              <div className="text-center mx-auto max-w-[551px] py-[11.4vh]">
                <p className="xl:px-16" style={sanchez}>
                  “I noticed significant improvement in my skin tone and texture
                  after using the Brightening Serum for a month. My acne scars
                  have faded and my skin looks healthier and radiant. It's made
                  with natural ingredients and is now a staple in my skincare
                  routine.”
                </p>
                <h3 style={roboto} className="font-semibold">
                  Sarah Simson
                </h3>
                <h3 style={roboto} className="text-black text-opacity-60">
                  @sarahsimson
                </h3>
              </div>
              <div className="flex">
                <img
                  src={result1}
                  alt="result-1"
                  className="xl:w-[220px] max-h-[260px]"
                />
                <img
                  src={result2}
                  alt="result-2"
                  className="xl:w-[220px] max-h-[260px]"
                />
                <img
                  src={result3}
                  alt="result-3"
                  className="xl:w-[220px] max-h-[260px]"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;
