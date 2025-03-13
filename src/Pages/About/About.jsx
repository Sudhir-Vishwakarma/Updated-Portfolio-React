import React from 'react'
import "./About.css";
import Info from '../../Components/Info';
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { resume } from '../../data';
import Skills from '../../Components/Skills';
import ResumeItem from '../../Components/ResumeItem';


const About = () => {
  return (
    <main className='section container'>
      <section className='about'>
        <h2 className='section__title'>
          About <span>Me</span>
        </h2>

        <div className='about__container grid'>
          <div className='about__info'>
            <h3 className='section__subtitle'>Personal Info</h3>
            <ul className='info__list grid'>
              <Info />
            </ul>
          </div>
          <div className='about_description'>
            <p>Hello, I m a Front-End UI Developer. Coding on React/Next and dreaming on ReactJS+ more technologies. Help Companies to build complext Web Applications and want to serve 1,00,000+ users with React and Modern Technologies.Have a keen interest in problem solving and a strong will to learn Computer Science and build things with scale and quality.</p>
            <div className='about__social'>
              <Link to="https://www.linkedin.com/in/sudhir-vishwakarma-6b660017b/">
                <button className='about__button'>
                  LinkedIN
                </button>
              </Link>
              <Link to="https://github.com/Sudhir-Vishwakarma">
                <button className='about__button'>
                  GitHub
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className='separator'></div>

      <section className='skills'>
        <h3 className='section__subtitle subtitle__center'>My Skills</h3>
        <div className='skills__container grid'>
          <Skills />
        </div>
      </section>

      <div className='separator'></div>

      <section className='resume'>
        <h3 className='section__subtitle subtitle__center'>
          Education / Experience 
        </h3>
        <div className='resume__container grid'>
          <div className='resume__data'>
            {
              resume.map((val) =>{
                if(val.category === 'experience'){
                  return <ResumeItem key={val.id} {...val}/>
                }
              })
            }
          </div>

          <div className='resume__data'>
            {
              resume.map((val) =>{
                if(val.category === 'education'){
                  return <ResumeItem key={val.id} {...val}/>
                }
              })
            }
          </div>
        </div>
      </section>

      <div className='separator'></div>

    </main>
  )
}

export default About;