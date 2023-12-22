import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { useMediaQuery } from "@mui/material";
import Hero from "./components/Hero";

const App = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:900px)");
  const sanchez = {
    fontFamily: "Sanchez, serif",
  };
  const roboto = {
    fontFamily: "'Roboto', sans-serif",
  };
  return (
    <div>
      <Navbar isNonMobileScreens={isNonMobileScreens} roboto={roboto} />
      <Hero
        isNonMobileScreens={isNonMobileScreens}
        roboto={roboto}
        sanchez={sanchez}
      />
    </div>
  );
};

export default App;
