import React from 'react'
import Navbar from './assets/componenets/Navbar/Navbar'
import Hero from './assets/componenets/Hero/Hero'
import Programs from './assets/componenets/programs/Programs'
import Title from './assets/componenets/Title/Title'
import About from './assets/componenets/About/About'
import Campus from './assets/componenets/Campus/Campus'
import Contact from './assets/componenets/Contact/Contact'
import Whatsapp from './assets/componenets/Whatsapp/Whatsapp'
import Footer from './assets/componenets/Footer/Footer'
import { Link } from 'react-scroll'
import { Routes } from 'react-router-dom'
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="containers">
        <Title subtitle='OUR PROGRAM 'title='what we offer '/>
         <About/>
      <Programs/>
      <Title subtitle='Gallery' title='campus photo'/>
      <Campus/>
       <Title subtitle='Contact us' title=' Get in Touch'/>
       <Whatsapp/>
       <Contact/>
       <Footer/>
      </div>
    </div>
  )
}


export default App
