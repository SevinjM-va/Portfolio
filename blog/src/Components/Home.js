import React, {  useRef, useState } from 'react';
import {  Link } from "react-router-dom";
import axios from 'axios';
import linkedin from '../Img/linkedin.svg';
import facebook from '../Img/facebook.svg';
import youtube from '../Img/youtube.svg';
import github from '../Img/github.svg';
import img1 from '../Img/finalProject/img1.jpg';
import img2 from '../Img/movieApp/img1.jpg';
import img3 from '../Img/hack2/img2.jpg';

export const Home =()=>{
  const [mess, setMessage] = useState('');

  const persName = useRef('persName');
  const persEmail = useRef('persEmail');
  const persMessage = useRef('persMessage');

  const handleClick= async(e)=>{
    e.preventDefault();
    try{
      const { data } = await axios.post('http://localhost:3500/home',{
        name: persName.current.value,
        email: persEmail.current.value,
        message: persMessage.current.value
      })
      if(data.success){
        setMessage('Thank you for your message.')
      } else {
        console.log('Request was successful', data);
      }
    } 
    catch(err){
      console.error('Something went wrong!',err)
    }
  }

  return(
    <div>
      <section id="left-nav">
      <div className="icon-container">
        <a href="https://www.linkedin.com/in/sevinj-mammadova-47574316a/" target='blank'>
          <img className="icon" src={linkedin} alt="LinkedIn Profile"/>
        </a>
        <a href="https://www.facebook.com/sevinc.mamedova.7/?locale=az_AZ" target='blank'>
        <img className="icon" src={facebook} alt=""/>
        </a>
        <a href="https://www.youtube.com/@mammadovasevinj" target='blank'>
        <img className="icon" src={youtube} alt=""/>
        </a>
        <a href="https://github.com/SevinjM-va?tab=repositories" target='blank'>
        <img className="icon" src={github} alt=""/></a>
      </div>
    </section>

    <main id="section-1">
      <div className="header">
        <h1 className="heading">HEY, I'M SEVINJ MAMMADOVA</h1>
        <p className="headerp"> A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>

        <button><Link to='/projects'>PROJECTS</Link></button>
      </div>
    </main>

    
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

    <section className="sections" id="section-3">
      <div className="aboutme">
        <h1 className="abouthead">Projects</h1>
          <p className="aboutp">Here you will find some of my projects </p>
      </div>

      <div className="project">
        <div className="projectimgDiv" >
          <img className="project2img" src={img1} alt=""/>
        </div>
        <div className='detail'>
          <h3 className='detailsheader'>SeeFoo-Food Delivery</h3>
            <p className="project1p">
            Crafted an Food Delivery website using React.js with dinamic galeries. I utilized React.js and Node.js in the development of a food delivery website. The site features various restaurants from which users can choose their preferred meals. Each restaurant has a dedicated menu page displaying available food items. User data for login and sign-up processes are stored in a PostgreSQL database. Additionally, I have implemented a system to ensure that all orders are accurately recorded in the database.  
            </p>
            <a href='https://github.com/SevinjM-va/My_Project/tree/main/FoodDelivery' target='blank'>
            <button >View in GitHub<i class="fa-regular fa-eye"></i></button>
            </a>
        </div>
      </div>

      <div className="project">
        <div  className="projectimgDiv" >
          <img className="project2img" src={img2} alt=""/>
        </div>
        <div className='detail'>
          <h3>Movie App</h3>
            <p className="project1p">
            I developed a Movie App using React.js. I leveraged React.js to fetch all information from an API based on search queries. This process involved a secondary fetch operation nested within the initial fetch. I utilized Redux as a tool to dispatch the fetched data to all components
            </p>
            <a href='https://github.com/SevinjM-va/Bootcamp/tree/main/Week9/Day5/MovieApp/blog' target='blank'>
            <button >View in GitHub<i className="fa-regular fa-eye"></i></button>
            </a>
        </div>
      </div>

      <div class="project">
        <div  class="projectimgDiv">
          <img class="project3img" src={img3} alt=""/>
        </div>
        <div className='detail'>
          <h3>Word Game for Kids</h3>
            <p class="project1p">
              I made this game with NodeJS. All questions come from PostgreSQL but checking in frontend.
            </p>
            <a href='https://github.com/SevinjM-va/Hackathon2' target='blank'>
            <button >View in GitHub<i class="fa-regular fa-eye"></i></button>
            </a>
        </div>
      </div>
    </section>

    <section class="sections" id="section-4">
      <div class="aboutme">
        <h1 class="abouthead">CONTACT</h1>
          <p class="aboutp">Here you can write your any message to me. </p>
      </div>

      {mess? <div className='messageSend'>Your message was successfully sent. Thank you for your message.</div> :
      <div className="form-container">
        
        <form action="">
          <label htmlFor="">Name</label>
          <input type="text" ref={persName} name='persName' placeholder="Enter Your Name"/>
          <label htmlFor="">Email</label>
          <input type="email" ref={persEmail}  name='persEmail' placeholder="Enter Your Email"/>
          <label htmlFor="">Message</label>
          <textarea name='persMessage' ref={persMessage} id="" cols="30" rows="10" placeholder="Enter Your Email"></textarea>
          <button onClick={handleClick}>SUBMIT</button>
        </form>
      </div>}
    </section>
    
    </div>
  )}