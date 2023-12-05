import React from 'react';
import {  Link } from "react-router-dom";
import img1 from '../Img/finalProject/img1.jpg';
import img2 from '../Img/movieApp/img1.jpg';
import img3 from '../Img/hack2/img2.jpg';
import img4 from '../Img/img1.jpg';
import img5 from '../Img/img2.jpg';
import img6 from '../Img/img3.jpg';
import img7 from '../Img/img4.jpg';
import img8 from '../Img/img5.jpg';
import img9 from '../Img/img6.jpg';
import img10 from '../Img/img7.jpg';
import img11 from '../Img/img8.jpg';
import img12 from '../Img/img9.jpg';
import img13 from '../Img/img10.jpg';


export const Projects =()=>{
  return(
    <section className="sections" id="section-3">
      <div className="aboutme">
        <h1 className="abouthead">My Projects</h1>
      </div>

      <div className="project1">
        <div className="projectimgDiv" >
          <img className="project2img" src={img1} alt=""/>
        </div>
        <div className='detail'>
          <h3>SeeFoo-Food Delivery</h3>
            <p className="project1p">
            Crafted an Food Delivery website using React.js with dinamic galeries. I utilized React.js and Node.js in the development of a food delivery website. The site features various restaurants from which users can choose their preferred meals. Each restaurant has a dedicated menu page displaying available food items. User data for login and sign-up processes are stored in a PostgreSQL database. Additionally, I have implemented a system to ensure that all orders are accurately recorded in the database.  
            </p>
            <a href='https://github.com/SevinjM-va/My_Project/tree/main/FoodDelivery' target='blank'>
            <button >View in GitHub<i class="fa-regular fa-eye"></i></button>
            </a>
        </div>
      </div>

      <div className="project2">
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

      <div class="project3">
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
      <div class="project4">
        <div  class="projectimgDiv">
          <img class="project3img" src={img4} alt=""/>
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
      <div class="project5">
        <div  class="projectimgDiv">
          <img class="project3img" src={img5} alt=""/>
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
      <div class="project6">
        <div  class="projectimgDiv">
          <img class="project3img" src={img6} alt=""/>
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
      <div class="project7">
        <div  class="projectimgDiv">
          <img class="project3img" src={img7} alt=""/>
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
      <div class="project8">
        <div  class="projectimgDiv">
          <img class="project3img" src={img8} alt=""/>
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

    )
  }