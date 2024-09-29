import React from 'react';
import pdf from '../pdf/ShrutiResume.pdf';
import hero from './Data/hero.json';



const Home = () => {
  return (
    <div className="container home">
        <div className="left">
            <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus sequi molestiae</h1>
        <a href={pdf} download={"Resume"} className="btn btn-outline-warning">Download Resume</a>
        </div>
        <div className="right">
        <div className="img">
            <img src= {"Assets/Images/hero/girlImage.jpg"} alt="hero" />
        </div>
            
        </div>
    </div>
  )
}

export default Home