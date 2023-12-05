import React from 'react';
import {  Link } from "react-router-dom";

export const About =()=>{
  return(
      <section className="sections" id="section-2">
      <div className="aboutme">
        <h1 className="abouthead">About me</h1>
          <p className="aboutp">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology </p>
      </div>

      <div className="gettoknowme-myskills">
        <div className="gettoknowme">
          <h3>Get to know me!</h3>
            <p className="gettoknowmep">
              I'm a <b>Full Stack JavaScript Web Developer</b> building the Front-end and Back-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <b>Projects</b>
            </p> 
            <p className="gettoknowmep">
              I also like sharing content related to the stuff that I have learned over the years in <b>Web Development</b> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a href="https://www.linkedin.com/in/sevinj-mammadova-47574316a/">Linkedin</a> where I post useful content related to Web Development and Programming
            </p>
            <p className="gettoknowmep">
              I'm open to <b>Job</b> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <b>contact</b> me.
            </p>
            <Link to='/contact'>
              <button>CONTACT</button>
            </Link>
        </div>

        <div className="myskills">
          <h3>My Skills</h3>
            <div className="button-container">
              <p className="skills">HTML</p>
              <p className="skills">CSS</p>
              <p className="skills">JavaScript</p>
              <p className="skills">React.JS</p>
              <p className="skills">Redux.JS</p>
              <p className="skills">Express.JS</p>
              <p className="skills">Postman.JS</p>
              <p className="skills">PostgreSQL</p>
              <p className="skills">GIT</p>
              <p className="skills">Github</p>
              <p className="skills">Terminal</p>
            </div>
        </div>
      </div>
    </section>
    )
  }