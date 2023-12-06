import React from 'react';
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

      <div className="project">
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
            I developed this game using Node.js. The questions are sourced from PostgreSQL, with checking done on the frontend.
            </p>
            <a href='https://github.com/SevinjM-va/Hackathon2' target='blank'>
            <button >View in GitHub<i class="fa-regular fa-eye"></i></button>
            </a>
        </div>
      </div>
      <div class="project">
        <div  class="projectimgDiv">
          <img class="project3img" src={img4} alt=""/>
        </div>
        <div className='detail'>
          <h3>Wild & Wacky Vegetables</h3>
            <p class="project1p">
            This is a static website where you can retrieve information. I utilized Bootstrap, HTML, and CSS for its design.
            </p>
            <a href='https://github.com/SevinjM-va/Bootcamp/tree/main/Week1/Day4/Daily%20challange%20day4' target='blank'>
            <button >View in GitHub<i class="fa-regular fa-eye"></i></button>
            </a>
        </div>
      </div>
      <div class="project">
        <div  class="projectimgDiv">
          <img class="project3img" src={img5} alt=""/>
        </div>
        <div className='detail'>
          <h3>Landing Page</h3>
            <p class="project1p">
            This is a static website where you can retrieve information. I utilized Bootstrap, HTML, and CSS for its design.
            </p>
            <a href='https://github.com/SevinjM-va/Bootcamp/tree/main/Week1/Day4/Exercices2' target='blank'>
            <button >View in GitHub<i class="fa-regular fa-eye"></i></button>
            </a>
        </div>
      </div>
      <div class="project">
        <div  class="projectimgDiv">
          <img class="project3img" src={img6} alt=""/>
        </div>
        <div className='detail'>
          <h3>Coloring Game</h3>
            <p class="project1p">
              I constructed this game using JavaScript, leveraging DOM events and manipulating the DOM tree for its implementation.
            </p>
            <a href='https://github.com/SevinjM-va/Bootcamp/tree/main/Week3/Day4/Exercise%20XP%20Game' target='blank'>
            <button >View in GitHub<i class="fa-regular fa-eye"></i></button>
            </a>
        </div>
      </div>
      <div class="project">
        <div  class="projectimgDiv">
          <img class="project3img" src={img7} alt=""/>
        </div>
        <div className='detail'>
          <h3>ROBOFRIENDS</h3>
            <p class="project1p">
            Using Redux, I added some functionality: when the user enters an input, it filters the robots based on the search. I built this page with the assistance of React Form and React Events.
            </p>
            <a href='https://github.com/SevinjM-va/Bootcamp/tree/main/Week9/Day2/DailyChallenge/blog' target='blank'>
            <button >View in GitHub<i class="fa-regular fa-eye"></i></button>
            </a>
        </div>
      </div>
      <div class="project">
        <div  class="projectimgDiv">
          <img class="project3img" src={img8} alt=""/>
        </div>
        <div className='detail'>
          <h3>Currency Converter</h3>
            <p class="project1p">
            I created a currency converter with the help of the Fetch API. The program takes the currency the user currently has, the currency they would like to receive, and the amount of money. Subsequently, the program outputs the correct exchange rate based on the data from the APIs. I also utilized the Async Await function in this implementation.
            </p>
            <a href='https://github.com/SevinjM-va/Bootcamp/tree/main/Week5/Day5/Daily%20challenge%20Currency' target='blank'>
            <button >View in GitHub<i class="fa-regular fa-eye"></i></button>
            </a>
        </div>
      </div>
      <div class="project">
        <div  class="projectimgDiv">
          <img class="project3img" src={img9} alt=""/>
        </div>
        <div className='detail'>
          <h3>Pokedex App</h3>
            <p class="project1p">
            In this game, all information is retrieved from the Fetch API. I also employed the Async Await function in this implementation.
            </p>
            <a href='https://github.com/SevinjM-va/Hackathon2' target='blank'>
            <button >View in GitHub<i class="fa-regular fa-eye"></i></button>
            </a>
        </div>
      </div>
      <div class="project">
        <div  class="projectimgDiv">
          <img class="project3img" src={img10} alt=""/>
        </div>
        <div className='detail'>
          <h3>Form Container</h3>
            <p class="project1p">
              In this project, I handle form data in real-time as the user enters or selects options within the provided form. I've employed JSX, components, React state, and form functionalities.
            </p>
            <a href='https://github.com/SevinjM-va/Bootcamp/tree/main/Week8/Day3/DailyChallenge/blog' target='blank'>
            <button >View in GitHub<i class="fa-regular fa-eye"></i></button>
            </a>
        </div>
      </div>
      <div class="project">
        <div  class="projectimgDiv">
          <img class="project3img" src={img11} alt=""/>
        </div>
        <div className='detail'>
          <h3>Memory Game</h3>
            <p class="project1p">
              In this game, clicking on a new card earns the user a point. However, clicking twice on the same card resets the score to zero. I implemented this website using ReactJS, including React state, React components, and event handlers.
            </p>
            <a href='https://github.com/SevinjM-va/Bootcamp/tree/main/Week8/Day5/DailyChallenge/blog' target='blank'>
            <button >View in GitHub<i class="fa-regular fa-eye"></i></button>
            </a>
        </div>
      </div>
      <div class="project">
        <div  class="projectimgDiv">
          <img class="project3img" src={img12} alt=""/>
        </div>
        <div className='detail'>
          <h3>Snap Shot</h3>
            <p class="project1p">
              In this project, Snap Shot is a gallery created using React and React Router. I've set up routes for four default pages and a search page. The images are displayed using an Image API, specifically the Pexel API. To access the API, you can sign in to Pexel, receive an API KEY, and start making requests. Throughout the project, I've utilized React, React state, React components, React Router, and event handlers.
            </p>
            <a href='https://github.com/SevinjM-va/Bootcamp/tree/main/Week9/Day4/SnapShot/blog' target='blank'>
            <button >View in GitHub<i class="fa-regular fa-eye"></i></button>
            </a>
        </div>
      </div>
      <div class="project">
        <div  class="projectimgDiv">
          <img class="project3img" src={img13} alt=""/>
        </div>
        <div className='detail'>
          <h3>Meme Generator</h3>
            <p class="project1p">
              This is a lighthearted project where clicking the button reveals random funny images, and you can add amusing text to them. The page is built using React.js and Redux
            </p>
            <a href='https://github.com/SevinjM-va/Bootcamp/tree/main/Week10/Day3/Exxp/blog' target='blank'>
            <button >View in GitHub<i class="fa-regular fa-eye"></i></button>
            </a>
        </div>
      </div>
    </section>

    )
  }