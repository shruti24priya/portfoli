import React from 'react';
import pdf from '../pdf/ShrutiResume.pdf';
import hero from './Data/hero.json';



const Home = () => {
  return (
    <div className="container home">
    <div className="right">
        <div className="img">
            <img src= {"Assets/Images/hero/girlImage.jpg"} alt="hero" />
        </div>
      </div>
    
        <div className="left">
            <h2>Hey!! welcome to my portfolio.So myself Shruti Priya,a passionate Frontend Developer dedicated to creating engaging and user-friendly web experiences. With a strong foundation in HTML, CSS, and JavaScript, I leverage modern frameworks like ReactJs </h2>
        <a href={pdf} download={"Resume"} className="btn btn-outline-warning">Download Resume</a>
        </div>
    </div>
  )
}

export default Home