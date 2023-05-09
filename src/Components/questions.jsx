import React from "react";
import "./question.css";

const Questions = (props) => {
  return (
    <div id="question" className="container-fluid my-5">
      <div className="text-center text-uppercase mb-4">
        <h1>{props.data ? props.data.title : "Loading..."}</h1>
      </div>
      <div className="row">
        <div className="questions p-3 rounded ms-3 me-3">
          <div className="question">
            <p
              data-bs-toggle="collapse"
              href="#multiCollapseExample1"
              role="button"
              aria-expanded="false"
              aria-controls="multiCollapseExample1"
            >
              1. What is Americas Birthday fun for hunger challenge?
            </p>
            <div class="collapse" id="multiCollapseExample1">
              <div class="card card-body">
                {props.data ? props.data.question : "Loading..."}
              </div>
            </div>
          </div>

          <div className="question">
            <p
              data-bs-toggle="collapse"
              href="#multiCollapseExample2"
              role="button"
              aria-expanded="false"
              aria-controls="multiCollapseExample2"
            >
              2. How do you participate in America Birthday Fun for hunger
              challenge?
            </p>
            <div class="collapse" id="multiCollapseExample2">
              <div class="card card-body">
                {props.data ? props.data.question : "Loading..."}
              </div>
            </div>
          </div>

          <div className="question">
            <p
              data-bs-toggle="collapse"
              href="#multiCollapseExample3"
              role="button"
              aria-expanded="false"
              aria-controls="multiCollapseExample3"
            >
              3. Who is eligible to participate in Americas Birthday fun for
              hunger challenge?
            </p>
            <div class="collapse" id="multiCollapseExample3">
              <div class="card card-body">
                {props.data ? props.data.question : "Loading..."}
              </div>
            </div>
          </div>
          <div className="question">
            <p
              data-bs-toggle="collapse"
              href="#multiCollapseExample4"
              role="button"
              aria-expanded="false"
              aria-controls="multiCollapseExample4"
            >
              4. When will I receive my $50 Shopping Gift Voucher?
            </p>
            <div class="collapse" id="multiCollapseExample4">
              <div class="card card-body">
                {props.data ? props.data.question : "Loading..."}
              </div>
            </div>
          </div>
          <div className="question">
            <p
              data-bs-toggle="collapse"
              href="#multiCollapseExample5"
              role="button"
              aria-expanded="false"
              aria-controls="multiCollapseExample5"
            >
              5. What your birthday two way gift pledging means?
            </p>
            <div class="collapse" id="multiCollapseExample5">
              <div class="card card-body">
                {props.data ? props.data.question : "Loading..."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
