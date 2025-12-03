import React from 'react'
import './whatsapp.css'
import Whatsapp_logo from '../../../assets/whatsapp.png'
const Whatsapp = () => {
  return (
    <div className='whatsapp'>
        <div className="whatsapp-logo">
            <a href="https://wa.me/919860241988"  target="_blank">
            <img src={ Whatsapp_logo} width={"100px"}alt="" /></a>
        </div>

      
    </div>
  )
}

export default Whatsapp
