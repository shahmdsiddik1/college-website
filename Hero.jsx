import React from 'react'
import './Hero.css'
import dark_arrow from '../../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1> WE ENSURE BETTER EDUCATION FOR BETTER WORLD</h1>
        <p> At our college, we ensure holistic development through a perfect blend of knowledge, 
          skills, and hands-on experience. Along with academic excellence,
           we provide well-equipped laboratories, a vibrant playground,
            and co-curricular opportunities that help students grow intellectually, physically,
             and socially for a successfull future.</p>
             <button className='btn'>EXPLORE MORE <img src={dark_arrow} alt=''></img> </button>
      </div>
      </div>
  )
}

export default Hero
