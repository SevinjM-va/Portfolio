import React from "react";
import photo from "../Img/SEVINJ.jpg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" id="namesurname" to='/'>
      <img className="profilimg" src={photo} alt=""/>
        Sevinj Mammadova
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to='/'>HOME
            <span className="sr-only">(current)</span>
              </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to='/about'>ABOUT
            </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to='/projects'>PROJECTS
            </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to='/contact'>CONTACT
            </Link>
          </li>
         
          
        </ul>
      </div>
    </nav>

    /* <header className="headcont">
      <nav className="container">
      <Link to='/'>
        <div className="navbar-container1">
          <img className="profilimg" src={photo} alt=""/>
          <h3 className="namesurname">SEVINJ MAMMADOVA</h3>
        </div>
        </Link>
        <div className="navbar-container2">
          <ul>
            
            <li><Link to='/projects'>PROJECTS</Link></li>
            <li><Link to='/contact'>CONTACT</Link></li>
          </ul>
        </div>
      </nav>
    </header> */
  );
};
