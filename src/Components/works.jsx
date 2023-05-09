import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./footer";
import Navbar from "./navbar";
import "./intro.css";

const Works = (props) => {
  return (
    <div className="container-fluid text-center">
      <div className="row">
        <div className="title-section mb-5 text-center d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-uppercase mb-4">
            {props.data ? props.data.title1 : "Loading..."}
          </h1>
          <div className="text-start">
            {props.data ? props.data.paragraph : "Unexpected error..."}
          </div>
          <h4>OR</h4>
          <div>
            {props.data ? props.data.paragraph2 : "Unexpected error..."}
          </div>
        </div>
      </div>
      <Container>
        <div></div>
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
