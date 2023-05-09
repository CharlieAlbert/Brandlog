import React from "react";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";

const Subscribe = () => {
  const navigate = useNavigate();
  return (
    <div className="text-start">
      <Navbar />

      <div
        align="center"
        className="container form min-vh-100 text-start d-flex justify-content-center align-items-center"
      >
        <form>
          <div className="text-center my-5">
            <h2>Request Invitation</h2>
          </div>
          <div class="form-outline mb-4">
            <label class="form-label" for="form5Example1">
              Name
            </label>
            <input type="text" id="form5Example1" class="form-control" />
          </div>

          <div class="form-outline mb-4">
            <label class="form-label" for="form5Example2">
              Email address
            </label>
            <input type="email" id="form5Example2" class="form-control" />
          </div>

          <button
            type="submit"
            onClick={() => {
              navigate("/");
            }}
            class="btn btn-primary btn-block mb-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
