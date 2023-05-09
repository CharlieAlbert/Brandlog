import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="w-inherit mt-5">
        <footer className="text-center text-lg-start bg-white text-muted">
          <section class="d-flex justify-content-center p-4 border-bottom">
            <div class="me-5 d-none d-lg-block text-center">
              <span>UNLOCKING NEW SHOPPING POSSIBILITIES TO IMPACT LIVES.</span>
            </div>
          </section>
          <section className="">
            <div className="container text-center text-md-center mt-5">
              <div class="row mt-3">
                <div class="col-md-12 mx-auto mb-4">
                  <p>
                    <a href="/contact" class="text-reset">
                      Contact Us
                    </a>
                  </p>
                  <p>
                    <i class="fas fa-home text-secondary"></i> Brandlogs Inc.
                  </p>
                  <p>
                    <i class="fas fa-envelope text-secondary"></i>
                    94306 Palo Alto, CA, United States.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div class="text-center p-4" style={{ backgroundColor: "#ebebeb" }}>
            Brandlogs Inc. © Copyright 2023
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
