import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./footer";
import Navbar from "./navbar";
import "./intro.css";

const Works = (props) => {
  return (
    <div className="container-fluid text-center">
      <div className="row">
        <div className="title-section mb-5 text-center text-uppercase d-flex justify-content-center align-items-center">
          <h1 className="">{props.data ? props.data.title : "Loading..."}</h1>
        </div>
      </div>
      <Container>
        <div>
          <span className="text-start">
            {props.data ? props.data.paragraph : "Unexpected error..."}
          </span>
        </div>
        <div className="ratio ratio-16x9 my-5">
          <iframe
            src="https://www.youtube.com/embed/SdsXgqbO-Zk"
            title="10 Gift Ideas Of Things People Actually Want!"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </Container>
    </div>
  );
};

export default Works;
