import React from "react";
import { ReactComponent as Logo } from "../logo.svg";
import "../css/Navbar.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <div className="my-navbar theme-light">
        <nav className="my-nav">
          <div className="my-navbar-brand">
            <Logo className="my-nav-logo-icon" />
            <Link className="my-nav-logo-text" to="/">
              {props.title}
            </Link>
          </div>
          <div className="my-nav-toggle my-nav-toggle" id="my-nav-toggle">
            {/* <i className="bx bx-menu"></i> */}
          </div>
          <div className="my-nav-list">
            <Link to="/" className="my-nav-link">
              <span className="my-nav-text text-uppercase">Home</span>
            </Link>
            <Link to="/about" className="my-nav-link">
              <span className="my-nav-text">About Us</span>
            </Link>
            <Link to="/" className="my-nav-link">
              <span className="my-nav-text">Register</span>
            </Link>
            <Link to="/" className="my-nav-link">
              <span className="my-nav-text">Login</span>
            </Link>
          </div>
        </nav>
      </div>
      <div id="scrolltoTop">
        <i className="bx bxs-chevron-up scrolltoTop"></i>
      </div>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
};
Navbar.defaultProps = {
  title: "My React App",
};
export default Navbar;
