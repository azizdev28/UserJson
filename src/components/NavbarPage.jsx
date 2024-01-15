import React from "react";
import "./NavbarPage.css";
const NavbarPage = () => {
  return (
    <div>
      <div className="navbar">
        <ul className="navLink">
          <li>
            <a className="link" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="link" href="#">
              Business
            </a>
          </li>
          <li>
            <a className="link" href="#">
              Entertainment
            </a>
          </li>
          <li>
            <a className="link" href="#">
              General
            </a>
          </li>
          <li>
            <a className="link" href="#">
              Health
            </a>
          </li>
          <li>
            <a className="link" href="#">
              Science
            </a>
          </li>
          <li>
            <a className="link" href="#">
              Sports
            </a>
          </li>
          <li>
            <a className="link" href="#">
              Technology
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarPage;
