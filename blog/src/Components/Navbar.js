import React from 'react';
import photo from '../Img/SEVINJ.jpg'
import {  Link } from "react-router-dom";

export const Navbar =()=>{
  return(
    <header className="headcont">
      <nav className="container">
      <Link to='/'>
        <div className="navbar-container1">
          <img className="profilimg" src={photo} alt=""/>
          <h3 className="namesurname">SEVINJ MAMMADOVA</h3>
        </div>
        </Link>
        <div className="navbar-container2">
          <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/about'>ABOUT</Link></li>
            <li><Link to='/projects'>PROJECTS</Link></li>
            <li><Link to='/contact'>CONTACT</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}