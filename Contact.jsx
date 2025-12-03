import React from 'react'
import './Contact.css'
import msg_icon from '../../../assets/msg-icon.png'
import mail_icon from '../../../assets/mail-icon.png'
import phone_icon from '../../../assets/phone-icon.png'
import location_icon from '../../../assets/location-icon.png'
import www from '../../../assets/world-wide-web.png'
import white_arrow from '../../../assets/white-arrow.png'
import whatsapp_logo from '../../../assets/whatsapp.png' 
const Contact = () => {

const [result, setResult] = React.useState("send message");

const sendmessage = async (event) => {
  event.preventDefault();
  setResult("Sending...");

  const formData = {
    name: event.target.name.value,
    email: event.target.email.value,
    message: event.target.message.value,
  };

  const response = await fetch("http://localhost:5173/send-message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (data.success) {
    setResult("Message sent successfully!");
    event.target.reset();
  } else {
    setResult("Message failed to send!");
  }
};




  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p> Feel free to reach out through contact form or find our 
                contact information below. Your feedback, questions, and 
                suggestions are important to us as we strive to provide 
                exceptional service to our university community.</p>
                <ul>
                    <li><img src={location_icon  } alt="" />Campus Address: Cidco / Naregaon</li>
                    <li><img src={phone_icon}alt="" />Phone: Prof. Mujahid Sir — +91 9860241988</li>
                    <li><img src={ mail_icon } alt="" />Email: godavarigroupedu@gmail.com</li>
                    <li><img src={ www } alt="" />Website: www.GGIcareer.com</li>
                    <li>
                      <a href='https://wa.me/918766048787?text=hello sir i want to take admission ?' target='_blank'></a>
                      <img src={whatsapp_logo}alt="" />Whatsapp :+91 9860241988 </li>
                </ul>

        </div>
         <div className="contact-col">
            <form onSubmit={sendmessage}>
                <input type="hidden" name="from_name" value="GGI Career Website" />
                <input type="hidden" name="from_email" value="shahmdsiddik1@gmail.com" />
                <label>YOUR NAME </label>
                    <input type="text" name="name" placeholder="Enter Your Name" required className='contact-input'/>
                 <label>EMAIL </label>
                    <input type="email" name="email"  placeholder="Enter Your email" required className='contact-input'/>
                     <label>WRITE YOUR MESSAGE HERE </label>
                      <textarea name="message" rows={6} placeholder='Enter Your Message ' required className='contact-input'></textarea>
                      <button type="submit" className='btn dark-btn'>Submit now <img src={ white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
         </div>
    </div>
  )
}

export default Contact
