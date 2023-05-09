import React from "react";
import "./benefits.css";

const Benefits = (props) => {
  return (
    <div id="benefits" className="container text-center">
      <div className="title  mb-5">
        <h1 className="text-uppercase">Benefits you get</h1>
        <span className="text-capitalize">From community platform</span>
      </div>

      <div className="">
        <div className="benefit">
          <h4>{props.data ? props.data.name : "Loading..."}</h4>
          <p>{props.data ? props.data.text : "Loading..."}</p>
        </div>
      </div>

      <div className="row gx-5">
        {props.data
          ? props.data.map((d, i) => (
              <div
                key={`${d.name}-${i}`}
                className="d-flex justify-content-around benefits rounded col-md-6 mb-4 py-3"
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

      <div className="row gx-5">
        {props.data
          ? props.data.map((d, i) => (
              <div
                key={`${d.name}-${i}`}
                className="benefits rounded col-lg-6 mb-4 p-3"
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
  );
};

export default Benefits;
