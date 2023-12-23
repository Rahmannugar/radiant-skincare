import React from "react";
import { useMediaQuery } from "@mui/material";
import GreenIcon from "../assets/green.png";
import PinkIcon from "../assets/pink.png";
import Baby from "../assets/baby.png";
import Woman from "../assets/woman.png";
import Curology from "../assets/curology.png";
import FlexImage from "./FlexImage";

const Skincare = ({ roboto, sanchez, sarpanch }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:700px)");

  return (
    <div>
      {isNonMobileScreens ? (
        <div>
          <div
            className="py-10 flex justify-center items-center sm:space-x-5 md:space-x-7 lg:space-x-10 text-[18px] leading-[25.2px] font-medium whitespace-nowrap overflow-hidden"
            style={sarpanch}
          >
            <h1>Radiant Skin</h1>
            <img src={GreenIcon} alt="green-icon" />
            <h1>Natural Ingredients</h1>
            <img src={GreenIcon} alt="green-icon" />
            <h1>Sustainable</h1>
            <img src={GreenIcon} alt="green-icon" />
            <h1>Gentle</h1>
            <img src={GreenIcon} alt="green-icon" />
            <h1>Nourishing</h1>
            <img src={GreenIcon} alt="green-icon" />
            <h1>Radiant Skin</h1>
            <img src={GreenIcon} alt="green-icon" />
          </div>

          <div className="pt-32">
            <div className="flex sm:space-x-5 xl:space-x-10 lg:pl-[100px] sm:justify-center sm:items-center lg:justify-start lg:items-start sm:px-10 md:px-16 lg:px-0 2xl:justify-center 2xl:items-center">
              <h1
                style={sanchez}
                className="sm:text-3xl lg:text-4xl  lg:mr-[-50px] xl:mr-0  xl:text-[48px] leading-[57.6px] max-w-[719px]"
              >
                Our Skincare Collection: Nourish and Protect Your Skin
              </h1>
              <div className="lg:w-28  xl:w-[160px]">
                <img src={PinkIcon} alt="pink-icon" />
              </div>
            </div>

            <FlexImage />
          </div>
        </div>
      ) : (
        <div>
          <div
            className="py-8 flex justify-between space-x-5  items-center font-medium  whitespace-nowrap overflow-hidden text-sm leading-4"
            style={sarpanch}
          >
            <h1>Radiant Skin</h1>
            <img src={GreenIcon} alt="green-icon" />
            <h1>Natural Ingredients</h1>
            <img src={GreenIcon} alt="green-icon" />
            <h1>Sustainable</h1>
            <img src={GreenIcon} alt="green-icon" />
            <h1>Gentle</h1>
            <img src={GreenIcon} alt="green-icon" />
            <h1>Nourishing</h1>
            <img src={GreenIcon} alt="green-icon" />
          </div>

          <div className="py-24">
            <div className="flex px-7">
              <h1 style={sanchez} className="text-xl">
                Our Skincare Collection: Nourish and Protect Your Skin
              </h1>
              <div className="w-32">
                <img src={PinkIcon} alt="pink-icon" />
              </div>
            </div>

            <div className="px-7 pt-10 flex flex-col">
              <img src={Woman} alt="woman" className="py-3" />
              <img src={Curology} alt="curology" className="py-3" />
              <img src={Baby} alt="baby" className="py-3" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skincare;
