import React from 'react'
import './About.css'
import about_img from '../../../assets/about.png' 
import logo from '../../../assets/Graduationcap.png'
import image from '../../../assets/book.png'
import award from '../../../assets/award.png'
import group from '../../../assets/group.png'

const About = () => {
  return (
    <div className='about'>
       
       <strong> <h1> WHY CHOOSE GGI ? </h1> </strong>
      
 <div className ="about-image-logo">
           <img src={logo } alt='' /> 
       <h2> Expert faculty </h2>
           <p> Learn from experienced educators dedicated to your success
             with personalized mentorship and guidance.</p> 
</div> 
 
  
      <div className='about-image-logo'>
           <img src={image} alt=''/> 
           <h2> Comprehensive Curriculum</h2>
           <p> Maharashtra State Board aligned syllabus with integrated 
            JEE/NEET and CA Foundation preparation programs.</p>
      </div>
       
      <div className='about-image-logo'>
          <img src={award} alt=''/>
          <h2> Modern Infrastructure</h2>
          <p> State-of-the-art classrooms, labs, and facilities designed to
             foster effective learning and growth.</p> 
          </div> 
           
      <div className='about-image-logo'>
           <img src={group} alt=''/> 
           <h2> Holistic Development</h2>
           <p>Weekly tests, seminars, counseling services, and active campus
             life for complete student development.</p>
      </div> 
     </div>
     
  )
}

export default About
