import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Questions from "./questions";
import JsonData from "../data/data.json";
import "./benefits.css";

import "./intro.css";

const How = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div className="container-fluid text-center">
      <div className="text-start">
        <Navbar />
      </div>
      <div id="how" className="row mb-5">
        <div className="title-section mb-5 text-center text-uppercase d-flex justify-content-center align-items-center">
          <h1>How we do it</h1>
        </div>
        {/* <div className="col-md-2"></div> */}
        <div className="col-md-12">
          <h2 className="my-4">
            We offer a Community platform that guarantees you;
          </h2>
          <div className="row">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.name}-${i}`}
                    className="benefits rounded col-lg-6 mb-4 p-4"
                  >
                    {" "}
                    <div className="benefit">
                      <h4>{d.name}</h4>
                      <p>{d.text}</p>
                    </div>
                  </div>
                ))
              : "loading..."}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default How;
