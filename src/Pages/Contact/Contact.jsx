import React from 'react'
import "./Contact.css";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaGithub
} from "react-icons/fa";
import { FiSend } from 'react-icons/fi';
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); 

    emailjs
      .sendForm(
        "service_0hext1c", 
        "template_ys9wswh", 
        form.current, 
        "-V-l_NKP79yhmP2PT" 
      )
      .then(
        (result) => {
          console.log("Email Sent Successfully:", result.text);
          alert("Message Sent!");
          form.current.reset(); 
        },
        (error) => {
          console.error("Email Sending Failed:", error.text);
          alert("Failed to send message. Try again.");
        }
      );
  };


  return (
    <section className='contact section'>
      <h2 className='section__title'>
        Get In <span>Touch</span>
      </h2>
      <div className='contact__container container grid'>
        <div className='contact__data'>
          <h3 className='contact__title'>FEEL FREE TO DROP ME A LINE</h3>
          <p className='contact__description'>
            If you have any suggestion, project or even you want to say Hello.. please fill out the form below and I will reply you shortly.
          </p>
          <div className='contact__info'>
            <div className='info__item'>
              <FaEnvelopeOpen className='info__icon' />
              <div>
                <span className='info__title'>Mail me</span>
                <h4 className='info__desc'>karmasudhir48@gmail.com</h4>
              </div>
            </div>

            <div className='info__item'>
              <FaPhoneSquareAlt className='info__icon' />
              <div>
                <span className='info__title'>Contact me</span>
                <h4 className='info__desc'>+91 7710945924</h4>
              </div>
            </div>

          </div>

          <div className='contact__socials'>
            <a href="https://www.facebook.com/sudhir.vishwakarma.792/" className='contact__social-link'>
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/in/sudhir-vishwakarma-6b660017b/" className='contact__social-link'>
              <FaLinkedin />
            </a>
            <a href="https://github.com/Sudhir-Vishwakarma" className='contact__social-link'>
              <FaGithub />
            </a>
            <a href="https://x.com/Sid58029663" className='contact__social-link'>
              <FaTwitter />
            </a>
          </div>

        </div>

        <form className='contact__form' ref={form} onSubmit={sendEmail}>
          <div className='form__input-group'>
            <div className='form__input-div'>
              <input 
                type='text'
                placeholder='Your Name'
                className='form__control'
                name='user_name'
              />
            </div>
            <div className='form__input-div'>
              <input 
                type='email'
                placeholder='Your E-mail'
                className='form__control'
                name='user_email'
              />
            </div>
            <div className='form__input-div'>
              <input 
                type='text'
                placeholder='Your Subject'
                className='form__control'
                name='user_subject'
              />
            </div>
          </div>

          <div className='form__input-div'>
            <textarea 
              placeholder='Your Message'
              className='form__control textarea' 
              name='user_message'
            ></textarea>    
          </div>
          
          <button className='contact__button'>
            Send
          </button>

        </form>
      </div>
    </section>
  )
}

export default Contact
