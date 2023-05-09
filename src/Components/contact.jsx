import React from "react";
import "./contact.css";
import Navbar from "./navbar";

const Contact = () => {
  return (
    <div>
        <Navbar />
      <div className="limiter text-start">
        <div className="container-login100">
          <div className="wrap-login100">
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-43 login-title text-center">
                Get In Touch
              </span>

              <div className="wrap-input100 validate-input">
                <input className="input100" type="text" name="name" />
                <span className="focus-input100"></span>
                <span className="label-input100">Name</span>
              </div>

              <div className="wrap-input100 validate-input">
                <input className="input100" type="email" name="email" />
                <span className="focus-input100"></span>
                <span className="label-input100">Email</span>
              </div>

              <div className="wrap-input100 validate-input">
                <textarea
                  id="exampleFormControlTextarea1"
                  className="input100"
                  type="email"
                  rows="3"
                  name="email"
                />
                <span className="focus-input100"></span>
                <label
                  for="exampleFormControlTextarea1"
                  className="label-input100"
                >
                  Message
                </label>
              </div>

              <div className="container-login100-form-btn my-4">
                <button
                  type="submit"
                  className="btn btn-lg page-scroll btn-primary"
                >
                  Send
                </button>
              </div>

              <div class="login100-form-social flex-c-m signinbtn"></div>
            </form>
            <div className="login-image login100-more"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
