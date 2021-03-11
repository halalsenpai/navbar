import React, { useState } from "react";
import "./style.scss";

const Navbar = () => {
  const [auth, setAuth] = useState(true);
  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
        <div className="container">
          <a className="navbar-brand" href="/">
            Custom Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <div className="d-flex flex-wrap">
                <li className="nav-item col-lg col-md-12 ">
                  <a
                    className="nav-link active pb-0"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item col-lg col-md-12 ">
                  <a
                    className="nav-link active pb-0"
                    aria-current="page"
                    href="/"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item col-lg col-md-12 ">
                  <a
                    className="nav-link active pb-0"
                    aria-current="page"
                    href="/"
                  >
                    Contact
                  </a>
                </li>
              </div>
            </ul>
            <div className="d-lg-flex">
              {auth ? (
                <div className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-light"
                      href="/"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Signed In as
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="/">
                          Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Sign Out
                        </a>
                      </li>
                    </ul>
                  </li>
                </div>
              ) : (
                <div className="btn btn-primary">Sign up</div>
              )}

              <div className="btn btn-success">List your place</div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
