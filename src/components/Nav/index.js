import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  let { height, accessed } = props;
  return (
    <>
      <div className="nav-wrapper fixed-top ">
        <nav
          className="navbar navbar-expand-lg navbar-light bg-dark"
          style={{ height: height + "px" }}
        >
          <div
            style={{ transition: "all 0.7s", fontSize: " 2rem" }}
            className={` 	col-xl-${
              accessed ? "3" : "6"
            } col-lg-6 h1div col-sm-12`}
          >
            <Link to="/home/">
              <h1 id="mainLink">
                {accessed ? "Dushyant" : "K. Dushyant Reddy"}
              </h1>
            </Link>
          </div>
          <div
            className="col-xl-4 offset-xl-5 col-lg-6 col-sm-12"
            style={{ opacity: accessed ? 1 : 0 }}
          >
            <div className="row d-flex justify-content-center">
              <Link className="nav-link" to="/home/">
                About
              </Link>
              <Link className="nav-link" to="/contact/">
                Contact
              </Link>
              <Link className="nav-link" to="/portfolio/">
                Projects
              </Link>
              <Link className="nav-link" to="/resume/">
                Resume
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <div className="navHolder" style={{ height: height + "px" }}></div>
    </>
  );
};

export default Nav;
