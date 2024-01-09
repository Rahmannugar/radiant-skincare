import React, { useState, lazy, Suspense, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { useMediaQuery } from "@mui/material";
import { PacmanLoader } from "react-spinners";

const Hero = lazy(() => import("./components/Hero"));
const Skincare = lazy(() => import("./components/Skincare"));
const About = lazy(() => import("./components/About"));
const Products = lazy(() => import("./components/Products"));
const Result = lazy(() => import("./components/Result"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:900px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const sanchez = {
    fontFamily: "Sanchez, serif",
  };
  const roboto = {
    fontFamily: "'Roboto', sans-serif",
  };
  const sarpanch = {
    fontFamily: "'Sarpanch', sans-serif",
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 4000);
  }, []);

  return (
    <div>
      {isLoaded ? (
        <div>
          {" "}
          <Navbar
            isNonMobileScreens={isNonMobileScreens}
            roboto={roboto}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
          {!isMenuOpen && (
            <Suspense fallback={<div></div>}>
              <Hero roboto={roboto} sanchez={sanchez} />
              <Skincare sanchez={sanchez} sarpanch={sarpanch} />
              <About roboto={roboto} sanchez={sanchez} />
              <Products roboto={roboto} sanchez={sanchez} />
              <Result roboto={roboto} sanchez={sanchez} />
              <Footer roboto={roboto} />
            </Suspense>
          )}
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-screen">
          <PacmanLoader color="black" />
        </div>
      )}
    </div>
  );
};

export default App;
