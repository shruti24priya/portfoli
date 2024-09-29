import React from "react";
import experience from './Data/experience.json';

const Experience = () => {
  return (
    <>
   <div className="container ex">
    <h1>EXPERIENCE</h1>
    {
      experience.map((data)=>{
       return (
        <>
        <div key={data.id} className='ex-items text-center'>
          <div className="left">
            <img src="" alt="" />
          </div> 
          <div className="right">
            <h2>{data.role}</h2>
            <h4>{data.organisation}</h4>
          </div>
        </div>
        </>
        );
      })
      } 
      
   </div>
    </>
  )
}

export default Experience