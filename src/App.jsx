import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { useMediaQuery } from "@mui/material";
import Hero from "./components/Hero";
import Skincare from "./components/Skincare";

const App = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:900px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sanchez = {
    fontFamily: "Sanchez, serif",
  };
  const roboto = {
    fontFamily: "'Roboto', sans-serif",
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
          <Skincare />
        </>
      )}
    </div>
  );
};

export default App;
