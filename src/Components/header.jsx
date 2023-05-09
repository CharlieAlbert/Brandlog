import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid header text-start">
      <div className="row row1">
        <div className="col intro-text">
          <div className="d-flex flex-column">
            <h1 className="title">
              {props.data ? props.data.title : "Loading..."}
            </h1>
            <span className="info">
              {props.data ? props.data.paragraph : "Unexpected error..."}
            </span>
            <section className="text-center">
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
      </div>
    </div>
  );
};

export default Header;
