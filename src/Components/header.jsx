import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid header text-start">
      <div className="row row1">
        <div className="col-lg-2"></div>
        <div className="col-lg-8 intro-text">
          <div className="d-flex flex-column">
            <h1 className="title">
              {props.data ? props.data.title : "Unexpected error..."}
            </h1>
            <span className="info">
              {props.data ? props.data.paragraph : "Unexpected error..."}
            </span>
            <section>
              <button
                type="button"
                onClick={() => {
                  navigate("/subscribe");
                }}
                className="btn btn-danger px-4 py-4 my-3 fw-bold invitation"
              >
                Request Invitation
              </button>
            </section>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default Header;
