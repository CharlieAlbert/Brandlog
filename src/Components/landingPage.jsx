import React, { useState, useEffect } from "react";
import JsonData from "../data/data.json";

import Navbar from "./navbar";
import Header from "./header";
import Benefits from "./benefits";
import Questions from "./questions";
import Footer from "./footer";
import Works from "./works";

const LandingPage = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div className="text-start">
      <Navbar />
      <Header data={landingPageData.Header} />
      <Benefits data={landingPageData.Benefits}/>
      <Works data={landingPageData.Works}/>
      <Questions data={landingPageData.Question}/>
      <Footer />
    </div>
  );
};

export default LandingPage;
