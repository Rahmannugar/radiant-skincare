import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { useMediaQuery } from "@mui/material";
import Hero from "./components/Hero";
import Skincare from "./components/Skincare";
import About from "./components/About";
import Products from "./components/Products";
import Result from "./components/Result";

const App = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:900px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sanchez = {
    fontFamily: "Sanchez, serif",
  };
  const roboto = {
    fontFamily: "'Roboto', sans-serif",
  };
  const sarpanch = {
    fontFamily: "'Sarpanch', sans-serif",
  };
  return (
    <div>
      <Navbar
        isNonMobileScreens={isNonMobileScreens}
        roboto={roboto}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      {!isMenuOpen && (
        <>
          <Hero roboto={roboto} sanchez={sanchez} />
          <Skincare sanchez={sanchez} sarpanch={sarpanch} />
          <About roboto={roboto} sanchez={sanchez} />
          <Products roboto={roboto} sanchez={sanchez} />
          <Result roboto={roboto} sanchez={sanchez} />
        </>
      )}
    </div>
  );
};

export default App;
