import React from "react";
import "./Nav.css";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <>
      <nav>
        <h1>PORTFOLIO</h1>
        <ul className="desktopMenu">
          <Link
            to="home"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
          >
            {" "}
            <li>Home</li>{" "}
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
          >
            {" "}
            <li>About</li>{" "}
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
          >
            <li>Projects</li>{" "}
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
          >
            <li>Contact</li>{" "}
          </Link>
        </ul>

        <div className="hamburger">
          <div className="ham"></div>
          <div className="ham"></div>
          <div className="ham"></div>
        </div>

        <ul className="mobileMenu">
          <Link
            to="home"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
          >
            {" "}
            <li>Home</li>{" "}
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
          >
            {" "}
            <li>About</li>{" "}
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
          >
            <li>Projects</li>{" "}
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
          >
            <li>Contact</li>{" "}
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
