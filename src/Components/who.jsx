import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Questions from "./questions";
import JsonData from "../data/data.json";
import "./intro.css";

const Who = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div className="container-fluid text-center">
      <div className="text-start">
        <Navbar />
      </div>
      <div id="who" className="row mb-5">
        <div className="title-section mb-5 text-center text-uppercase d-flex justify-content-center align-items-center">
          <h1 className="">{props.data ? props.data.title : "Loading..."}</h1>
        </div>
        {/* <div className="col-md-2"></div> */}
        <div className="col-md-12 mb-5">
          <h2 className="my-3">
            {props.data ? props.data.text : "Loading..."}
          </h2>
          <span className="fw-bold">
            {props.data ? props.data.intro : "Loading..."}
          </span>
          <span className="mission">
            {props.data ? props.data.paragraph : "Loading..."}
          </span>

          <div className="my-4 text-center">
            <h3 className="text-center">OUR PURPOSE</h3>
            <span>{props.data ? props.data.purpose : "Loading..."}</span>
          </div>

          <div className="mb-4 text-center">
            <h3 className="text-center">OUR VISION</h3>
            <span>{props.data ? props.data.vision : "Loading..."}</span>
          </div>

          <div className="mb-4 text-center">
            <h3 className="text-center">HEAD OF MISSION</h3>
            <h6 className="text-center">TITUS GICHARU</h6>
            <span>{props.data ? props.data.detail : "Loading..."}</span>
          </div>

          <div className="text-center">
            <h5>{props.data ? props.data.title2 : "Loading..."}</h5>
            <span>{props.data ? props.data.detail2 : "Loading..."}</span>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Who;
