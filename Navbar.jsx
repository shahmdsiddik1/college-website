import React, { useEffect, useState } from 'react' 
import './Navbar.css'
import logo from '../../../assets/godavarrilogo.jpg'
import { Link } from "react-scroll";
import About from '../About/About'
import Programs from '../programs/Programs'
import Campus from '../Campus/Campus'
import Contact from '../Contact/Contact'
import Title from '../Title/Title'
import Hero from '../Hero/Hero';
import menu_icon from '../../../assets/menu-icon.png'
const Navbar = () => {

  const [ sticky, setsticky ] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setsticky(true) : setsticky(false);
    })
  },[]);

  const [mobileMenu , setMobileMenu] = useState (false);
  const toggleMenu=()=>{
     mobileMenu? setMobileMenu(false): setMobileMenu(true);
  }

  return (
<nav className={`container ${sticky ? "dark-nav" : ""}`}>
  <img src={logo} alt="" className="logo" />

<ul className={`menu ${mobileMenu ? "show-menu" : "hide-mobile-menu"}`}>
    <li>
      <Link to="hero" smooth={true} duration={500} offset={0} className="btn">
        Home
      </Link>
    </li>

    <li>
      <Link to="about" smooth={true} duration={500} offset={-150} className="btn">
        About Us
      </Link>
    </li>

    <li>
      <Link to="programs" smooth={true} duration={500} offset={-300} className="btn">
        Courses
      </Link>
    </li>

    <li>
      <Link to="campus" smooth={true} duration={500} offset={-300} className="btn">
        Gallery
      </Link>
    </li>

    <li>
      <Link to="contact" smooth={true} duration={500} className="btn">
        Contact Us
      </Link>
    </li>
  </ul>
  <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
</nav>

  )
}

export default Navbar
