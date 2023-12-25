import model from "../assets/model.png";
import { useMediaQuery } from "@mui/material";
import result1 from "../assets/result-1.png";
import result2 from "../assets/result-2.png";
import result3 from "../assets/result-3.png";

const Result = ({ roboto, sanchez }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:1024px)");

  return (
    <div className="py-12">
      {isNonMobileScreens ? (
        <div className="xl:px-[70px] lg:px-10 xl:mb-20">
          <div className="2xl:flex  2xl:justify-center 2xl:items-center 2xl:text-center">
            <h1
              style={sanchez}
              className="max-w-[560px] xl:text-5xl lg:text-4xl 2xl:text-5xl leading-[57.6px]"
            >
              Real Results from Real Customers
            </h1>
          </div>
          <div className="flex 2xl:items-center 2xl:justify-center  mt-24">
            <img
              src={model}
              alt="Sarah Simson"
              className="lg:w-[380px] lg:h-[460px] xl:w-[520px] xl:h-[600px]"
            />
            <div className="">
              <div className="text-center  xl:ml-12 2xl:ml-20 mx-auto max-w-[551px] py-[10%]">
                <p
                  className="text-xl leading-7 xl:py-[19px] 2xl:py-2"
                  style={sanchez}
                >
                  “I noticed significant improvement in my skin tone and texture
                  after using the Brightening Serum for a month. My acne scars
                  have faded and my skin looks healthier and radiant. It's made
                  with natural ingredients and is now a staple in my skincare
                  routine.”
                </p>
                <h3
                  style={roboto}
                  className="font-semibold text-sm leading-[21px]"
                >
                  Sarah Simson
                </h3>
                <h3
                  style={roboto}
                  className="text-sm leading-[21px] text-black text-opacity-60"
                >
                  @sarahsimson
                </h3>
              </div>
              <div className="flex absolute 2xl:relative">
                <img
                  src={result1}
                  alt="result-1"
                  className="xl:w-[30%] xl:h-[260px] 2xl:w-[237.33px]"
                />
                <img
                  src={result2}
                  alt="result-2"
                  className="xl:w-[30%] xl:h-[260px] 2xl:w-[237.33px]"
                />
                <img
                  src={result3}
                  alt="result-3"
                  className="xl:w-[30%] xl:h-[260px] 2xl:w-[237.33px]"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="px-10">
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
    </div>
  );
};

export default Result;
