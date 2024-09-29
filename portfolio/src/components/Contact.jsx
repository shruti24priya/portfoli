import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div>
      <div className="container contact">
        <h1>CONTACT ME</h1>
        <div className="contact-icon">
          <a href="https://www.instagram.com" target="blank" className="items">
          <FaSquareInstagram className="icons"/>
          </a>
          <a href="https://www.linkedin.com/in/shruti-priya-271253251" target="blank"  className="items">
          <BsLinkedin className="icons"/>
          </a>
          <a href="https://github.com/shruti24priya" target="blank"  className="items">
          <ImGithub className="icons"/>
          </a>
          <a href="mailto:shruti24priya@gmail.com" target="blank"  className="items">
          <SiGmail className="icons"/>
          </a>
          
        </div>
      </div>
    </div>
  )
}

export default Contact