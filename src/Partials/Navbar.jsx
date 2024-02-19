import React from "react";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark position-absolute w-100">
      <div className="container">
        <a className="navbar-brand logo-image" href="index.html">
          <img src="src/images/logo.svg" alt="alternative" />
        </a>

        <a className="navbar-brand logo-text page-scroll" href="index.html"></a>

        <button
          className="navbar-toggler p-0 border-0"
          type="button"
          data-toggle="offcanvas"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="navbar-collapse offcanvas-collapse"
          id="navbarsExampleDefault"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#header">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdown01"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Drop
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <a className="dropdown-item page-scroll" href="project.html">
                  Project Details
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item page-scroll" href="terms.html">
                  Terms Conditions
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item page-scroll" href="privacy.html">
                  Privacy Policy
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <span className="nav-item social-icons">
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-facebook-f fa-stack-1x"></i>
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-twitter fa-stack-1x"></i>
              </a>
            </span>
          </span>
        </div>
      </div>
    </nav>
  );
}
