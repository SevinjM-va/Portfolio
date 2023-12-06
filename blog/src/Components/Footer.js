import React from "react";
import linkedin from "../Img/linkedin.svg";
import facebook from "../Img/facebook.svg";
import youtube from "../Img/youtube.svg";
import github from "../Img/github.svg";

export const Footer = () => {
  return (
    <footer>
      <div className="footer1">
        <div className="footer11">
          <h3 className="footerheader">SEVINJ MAMMADOVA</h3>
          <p className="footerp">
          Full Stack JavaScript developer with a focus on building both the frontend and backend of websites and web applications. My goal is to contribute to the success of the overall product.
          </p>
        </div>

        <div className="footerSM">
          <h3>Social</h3>
          <div className="icon-container-footer">
            <a
              href="https://www.linkedin.com/in/sevinj-mammadova-47574316a/"
              target="blank"
            >
              <img
                className="icon-footer"
                src={linkedin}
                alt="LinkedIn Profile"
              />
            </a>
            <a
              href="https://www.facebook.com/sevinc.mamedova.7/?locale=az_AZ"
              target="blank"
            >
              <img className="icon-footer" src={facebook} alt="" />
            </a>
            <a href="https://www.youtube.com/@mammadovasevinj" target="blank">
              <img className="icon-footer" src={youtube} alt="" />
            </a>
            <a
              href="https://github.com/SevinjM-va?tab=repositories"
              target="blank"
            >
              <img className="icon-footer" src={github} alt="" />
            </a>
          </div>
        </div>
      </div>

      <hr></hr>
      <div className="footer2">
        <div>
          <img className="copyright" src="Img/copyright.png" alt="" />
        </div>
        <div>
          <p>
            Copyright 2023. Made by
            <a href="#section-1" className="footername">
              Sevinj Mammadova
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
