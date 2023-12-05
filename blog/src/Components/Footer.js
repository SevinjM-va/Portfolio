import React from 'react';
import linkedin from '../Img/linkedin.svg';
import facebook from '../Img/facebook.svg';
import youtube from '../Img/youtube.svg';
import github from '../Img/github.svg';

export const Footer =()=>{
  return(
    <footer>
      <div className="footer1">
        <div className="footer11">
          <h3>SEVINJ MAMMADOVA</h3>
            <p>
              A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
            </p>
        </div>
        
        <div>
          <h3>Social</h3>
          <div className="icon-container-footer">
            <img className="icon-footer" src={linkedin} alt=""/>
            <img className="icon-footer" src={youtube} alt=""/>
            <img className="icon-footer" src={github} alt=""/>
            <img className="icon-footer" src={facebook} alt=""/>
          </div>
        </div>
      </div>

      <hr></hr>
      <div class="footer2">
        <div>
          <img className="copyright" src="Img/copyright.png" alt=""/>
        </div>
        <div>
        <p>Copyright 2023. Made by<a href="#section-1" className="footername">Sevinj Mammadova</a></p>
      </div>
    </div>
    </footer>
  )}