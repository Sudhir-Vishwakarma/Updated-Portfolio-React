import React from 'react';
import Profile from "../../assets/profile2.png";
import { Link } from 'react-router-dom';
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { GoDownload } from "react-icons/go";
import { TypeAnimation } from "react-type-animation";
import "./Home.css";

const Home = () => {
  return (
    <section className='home section grid'>
      <img src={Profile} alt='' className='home__img'/>

      <div className='home__content'>
        <div className='home__data'>
          <div className='home__title'>
            <h1>HI THERE! I'M </h1>
            <span>Sudhir Vishwakarma</span>
          </div>
          <h2 className='home__type'>
            <TypeAnimation
                sequence={[
                  "Front-End Developer", 0,
                  "React/Redux", 0,
                  "Next.js", 0
                ]}
                wrapper="span"
                speed={-200} 
                repeat={Infinity}
                className='animation'
              />
          </h2>
          <div className='download'>
            <a href="/files/Sudhir-Profile.pdf" download className='home__button'>
              DOWNLOAD CV
            </a>
            <Link to='/about' className='home__button'>
              More About Me{''}
            </Link>
          </div>
        </div>
      </div>
      <div className='color__block'></div>
      <div className='color__block2'></div>
    </section>
  )
}

export default Home;
