import React from 'react'
import "./Portfolio.css"

import interior from "../../assets/interior-design.jpg"
import crypto from "../../assets/crypto-currency.png"
import coursera from "../../assets/coursera.webp"
import images from "../../assets/images.webp"
import landing from "../../assets/Landingpage.webp"
import education from "../../assets/Education.jpg"
import todo from "../../assets/to do.jpg"
import food from "../../assets/food.webp"
import expense from "../../assets/ExpenseTracker.webp"
// import quiz from "../../assets/Quizapp.webp"
// import note from "../../assets/Noteapp.webp"
// import quizReact from "../../assets/QuizappReact.png"



import { Link } from 'react-router-dom'
import { HiCodeBracket } from "react-icons/hi2";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Portfolio = () => {
  return (
    <section className='portfolio section'>
      <h2 className='section__title'>My <span>Projects</span></h2>
      
      <div className='work__list'>
        <div className='work'>
          <img src={interior} alt=''/>
          <div className='layer'>
            <h3>Interior Decorator</h3>
            <p>An Interior Decor Project with the help of React with Firebase with Google Authentication</p>
            <div className='portfolio__link'>
              <Link to="https://github.com/Sudhir-Vishwakarma/Subhash-Interior.git" className='a'><HiCodeBracket /></Link>
              <Link to="https://svimla-interior.firebaseapp.com/" className='a'><MdOutlineRemoveRedEye /></Link>
            </div>
          </div>
        </div>
        <div className='work'>
          <img src={crypto} alt=''/>
          <div className='layer'>
            <h3>Crypto-Currency App</h3>
            <p>A cryptocurrency app built with React, leveraging CoinGecko API for real-time data, price tracking, and market insights with a sleek UI.</p>
            <div className='portfolio__link'>
              <Link to="https://github.com/Sudhir-Vishwakarma/crypto-currency-app-react.git" className='a'><HiCodeBracket /></Link>
              <Link to="https://crypto-currency-7bptqvbdg-sudhir-vishwakarmas-projects.vercel.app/" className='a'><MdOutlineRemoveRedEye /></Link>
            </div>
          </div>
        </div>
        <div className='work'>
          <img src={coursera} alt=''/>
          <div className='layer'>
            <h3>Coursera Clone</h3>
            <p>A complete static Coursera clone built with JavaScript, showcasing course listings, responsive design, and an engaging user interface.</p>
            <div className='portfolio__link'>
              <Link to="https://github.com/Sudhir-Vishwakarma/Coursera-Clone-JS.git" className='a'><HiCodeBracket /></Link>
              <Link to="https://sudhir-vishwakarma.github.io/Coursera-Clone-JS/" className='a'><MdOutlineRemoveRedEye /></Link>
            </div>
          </div>
        </div>
        <div className='work'>
          <img src={images} alt=''/>
          <div className='layer'>
            <h3>Image Search App</h3>
            <p>An image search app built with JavaScript, fetching images via API, featuring a sleek UI, search functionality, and smooth user experience.</p>
            <div className='portfolio__link'>
              <Link to="https://github.com/Sudhir-Vishwakarma/Image-Search-JS.git" className='a'><HiCodeBracket /></Link>
              <Link to="https://sudhir-vishwakarma.github.io/Image-Search-JS/" className='a'><MdOutlineRemoveRedEye /></Link>
            </div>
          </div>
        </div>
        <div className='work'>
          <img src={landing} alt=''/>
          <div className='layer'>
            <h3>Landing Page</h3>
            <p>A dynamic landing page built with JavaScript, featuring smooth animations, responsive design, interactive elements, and an engaging user experience.</p>
            <div className='portfolio__link'>
              <Link to="https://github.com/Sudhir-Vishwakarma/Landing-Page-JS.git" className='a'><HiCodeBracket /></Link>
              <Link to="https://sudhir-vishwakarma.github.io/Landing-Page-JS/index.html#price-container" className='a'><MdOutlineRemoveRedEye /></Link>
            </div>
          </div>
        </div>
        <div className='work'>
          <img src={education} alt=''/>
          <div className='layer'>
            <h3>Education</h3>
            <p>An education platform built with JavaScript, featuring course content, interactive lessons, responsive design, and an engaging user experience for learners.</p>
            <div className='portfolio__link'>
              <Link to="https://github.com/Sudhir-Vishwakarma/Edu-site" className='a'><HiCodeBracket /></Link>
              <Link to="https://sudhir-vishwakarma.github.io/Edu-site/index.html" className='a'><MdOutlineRemoveRedEye /></Link>
            </div>
          </div>
        </div>
        <div className='work'>
          <img src={todo} alt=''/>
          <div className='layer'>
            <h3>To-Do List</h3>
            <p>A to-do list app built with JavaScript, featuring task addition, deletion, local storage support, and a clean, user-friendly interface.</p>
            <div className='portfolio__link'>
              <Link to="https://github.com/Sudhir-Vishwakarma/To-Do-List-JS.git" className='a'><HiCodeBracket /></Link>
              <Link to="https://sudhir-vishwakarma.github.io/To-Do-List-JS/" className='a'><MdOutlineRemoveRedEye /></Link>
            </div>
          </div>
        </div>
        <div className='work'>
          <img src={food} alt=''/>
          <div className='layer'>
            <h3>Food Service</h3>
            <p>A static food service website built with React, showcasing a menu, restaurant details, responsive design, and an engaging user interface.</p>
            <div className='portfolio__link'>
              <Link to="https://github.com/Sudhir-Vishwakarma/FoodService-ReactJS.git" className='a'><HiCodeBracket /></Link>
              <Link to="https://food-service-react.web.app/" className='a'><MdOutlineRemoveRedEye /></Link>
            </div>
          </div>
        </div>
        <div className='work'>
          <img src={expense} alt=''/>
          <div className='layer'>
            <h3>Expense Tracker</h3>
            <p>An expense tracker built with JavaScript, featuring income and expense logging, real-time calculations, local storage support, and a user-friendly interface.</p>
            <div className='portfolio__link'>
              <Link to="https://github.com/Sudhir-Vishwakarma/Expense-Tracker-JS" className='a'><HiCodeBracket /></Link>
              <Link to="https://sudhir-vishwakarma.github.io/Expense-Tracker-JS/" className='a'><MdOutlineRemoveRedEye /></Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Portfolio
