import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { useMediaQuery } from "@mui/material";

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
    </div>
  );
};

export default App;
