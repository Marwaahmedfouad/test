import React from 'react'
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaFacebookF, FaTwitter ,FaGithub,FaLinkedinIn} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

import './contact.css'
function Contact() {
  return (
    <>
      <section className="contact section">
        <h2 className="section__title">
          Contact <span>Me</span>
        </h2>


        <div className="contact__container container grid">
          <div className="contact__data">
            <h2 className="contact__title"> Let's Work Together</h2>
            <p className="contact__description">
              Fell free to get in touch with me. I am always open to discussing new projects ,
              creative ideas or oppertunities to be part of your visions .
            </p>
            {/* part1 */}
            <div className="contact__info">
              <div className="info__item">
                <FaEnvelopeOpen className='info_icon' />
                <div>
                  <span className="info__title">Mail Me </span>
                  <h4 className="info__desc">marwa.fouad102@gmail.com</h4>
                </div>
              </div>


              <div className="info__item">
                <FaPhoneSquareAlt className='info_icon' />
                <div>
                  <span className="info__title">Call Me </span>
                  <h4 className="info__desc">+01158408272</h4>
                </div>
              </div>

            </div>

            {/* part2 */}
            <div className="social-media" style={{paddingTop:'15px'}}>
              <div className='bg-icon'>
                <a href=''><FaLinkedinIn /></a>
                <span></span>
              </div>
              <div className='bg-icon'>
                <a href=''><FaGithub /></a>
                <span></span>
              </div>
              <div className='bg-icon'>
                <a href=''><FaTwitter /></a>
                <span></span>
              </div>
              <div className='bg-icon'>
                <a href=''><FaFacebookF /></a>
                <span></span>
              </div> 
            </div>

          </div>




          <form action="" className="contact__form">
            <div className="form__input-group">
              <div className="form__input-div">
                <input type="text" placeholder='you name' className="form__control" />
              </div>
              <div className="form__input-div">
                <input type="email" placeholder='you Email' className="form__control" />
              </div>
              <div className="form__input-div">
                <input type="text" placeholder='you Subject' className="form__control" />
              </div>
            </div>
            <div className="form__input-div">
              <textarea type="text" placeholder='you Message' className="form__control textarea" />
            </div>
            <button className="button">
              Send Message
              <span className="button__icon contact__button-icon"><FiSend /></span>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
