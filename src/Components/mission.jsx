import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Questions from "./questions";
import JsonData from "../data/data.json";
import "./intro.css";

const Mission = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div className="container-fluid text-start">
      <Navbar />
      <div id="mission" className="row mb-5">
        <div className="title-section mb-5 text-center text-uppercase d-flex justify-content-center align-items-center">
          <h1 className="">{props.data ? props.data.title : "Loading..."}</h1>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-10 text-start">
          <div>
            <h2 className="text-center mb-4">
              {props.data ? props.data.title2 : "Loading..."}
            </h2>
          </div>
          <div className="mb-5">
            <span className="mission">
              {props.data ? props.data.text : "Loading..."}
            </span>
          </div>
          <div className="text-center">
            <h2 className="text-uppercase">
              {props.data ? props.data.title3 : "Loading..."}
            </h2>
            <span>{props.data ? props.data.text2 : "Loading..."}</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mission;
