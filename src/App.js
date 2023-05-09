import React, { useState, useEffect } from "react";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import JsonData from "./data/data.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./Components/landingPage";
import Works from "./Components/works";
import Subscribe from "./Components/subscribe";
import Mission from "./Components/mission";
import Why from "./Components/why";
import How from "./Components/how";
import Who from "./Components/who";
import Contact from "./Components/contact";
import Questions from "./Components/questions";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route
            exact
            path="/works"
            element={<Works data={landingPageData.Works} />}
          />
          
          <Route
            exact
            path="/who"
            element={<Who data={landingPageData.Who} />}
          />
          <Route
            exact
            path="/how"
            element={<How data={landingPageData.How} />}
          />
          <Route
            exact
            path="/why"
            element={<Why data={landingPageData.Why} />}
          />
          <Route
            exact
            path="/mission"
            element={<Mission data={landingPageData.Mission} />}
          />
          <Route
            exact
            path="/question"
            element={<Questions data={landingPageData.Question} />}
          />
          <Route
            exact
            path="/subscribe"
            element={<Subscribe />}
          />

          <Route
            exact
            path="/contact"
            element={<Contact />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
