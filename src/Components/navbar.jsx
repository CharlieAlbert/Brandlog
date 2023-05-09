import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand text-uppercase" href="/">
            Brandlogs.com
          </a>
          <div className="d-flex flex-row-reverse">
            <button
              className="navbar-toggler collapsed px-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <span className="navbar-toggler-icon ms-2"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item mx-3">
                  <a className="nav-link active" href="/works">
                    How it works
                  </a>
                </li>
                <li className="nav-item dropdown mx-3">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/about"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About Us
                  </a>
                  <ul className="dropdown-menu text-left">
                    <li>
                      <a className="dropdown-item" href="/mission">
                        Our mission
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/why">
                        Why we do it
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/how">
                        How we do it
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/who">
                        Who we are
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
