import React, { useEffect } from "react";
import TopHeader from "./Home/TopHeader/TopHeader";
import Navbar from "./Home/Navbar/Navbar";
import Details from "./Home/Details/Details";
import Footer from "./Home/Footer/Footer";

const DetailId = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <TopHeader />
      <Navbar />
      <Details />
      <Footer />
    </>
  );
};

export default DetailId;
