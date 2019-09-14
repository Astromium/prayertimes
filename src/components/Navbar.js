import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar-style.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-light mb-4">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <i className="fas fa-mosque" style={{ color: "#428bca" }}></i>{" "}
            &nbsp; <span className="text-primary">مواقيت</span> الصلاة
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMain"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <Link to="/" className="nav-link text-dark">
                  <i className="fas fa-home"> </i>&nbsp; الرئيسية{" "}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-dark"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-address-book"></i>&nbsp; تواصل معنا{" "}
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a
                    className="dropdown-item"
                    href="https://www.facebook.com/Son.Ayoub.Messi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook"></i>&nbsp; Ayoub Belouadah
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://github.com/Astromium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>&nbsp; Astromium
                  </a>

                  <a
                    className="dropdown-item"
                    href="https://twitter.com/ayoub_belouadah"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter"></i>&nbsp; @ayoub_belouadah
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-dark">
                  <i className="fas fa-cog"></i>&nbsp; حول التطبيق
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
