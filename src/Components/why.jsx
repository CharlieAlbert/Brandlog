import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import JsonData from "../data/data.json";
import Questions from "./questions";

import "./intro.css";

const Why = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div className="container-fluid text-center">
      <div className="text-start">
        <Navbar />
      </div>
      <div id="why">
        <div className="row mb-5">
          <div className="title-section mb-5 text-center text-uppercase d-flex justify-content-center align-items-center">
            <h1 className="">{props.data ? props.data.title : "Loading..."}</h1>
          </div>
          {/* <div className="col-md-2"></div> */}
          <div className="col-md-12">
            <h2 className="text-center">
              {props.data ? props.data.question1 : "Loading..."}
            </h2>
            <span className="mission">
              {props.data ? props.data.text : "Loading..."}
            </span>
          </div>
        </div>

        <div className="row my-5">
          {/* <div className="col-md-2"></div> */}
          {/* <div className="col-md-4 gift"></div> */}
          <div className="col-md-12 d-flex align-items-center">
            <div className="d-flex flex-column">
              <h4 className="">
                {props.data ? props.data.question : "Loading..."}
              </h4>
              <span className="mission">
                {props.data ? props.data.answer : "Loading..."}
              </span>
            </div>
          </div>
        </div>

        <div className="row">
          {/* <div className="col-md-2"></div> */}
          <div className="col-md-12">
            <div>
              <span className="mission">
                {props.data ? props.data.continue : "Loading..."}
              </span>
            </div>
            <div>
              <span className="mission">
                {props.data ? props.data.instance1 : "Loading..."}
              </span>
            </div>
            <span className="fw-bold text-center">OR</span>
            <div>
              <span className="mission">
                {props.data ? props.data.instance2 : "Loading..."}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Why;
