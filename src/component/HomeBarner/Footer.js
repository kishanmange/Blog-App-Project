import React from 'react'
import social from "../Store/Social.jpg"

const Footer = () => {
  return (
    <div className='footer5656'>
      <div className='Footer-flex'>
        <div>
            <h4>The Siren</h4>
            <p>Sirenthe1234@gmail.com</p>
            <p>+91 58585895959</p>
        </div>
        <div>
            <h4>
                Services
            </h4>
            <p>Address Verification</p>
            <p>Criminal check</p>
            <p>Social Media</p>
            <p>Student Verification</p>
        </div>
        <div>
            <h4>Resources</h4>
            <p>Blogs</p>
            <p>Career</p>
            <p>Contact Us</p>
        </div>
        <div>
            <h4>Projects</h4>
            <p>Bollywood</p>
            <p>Hollywood</p>
            <p>Dhollywood</p>
            <p>Fitness</p>
            <p>Food</p>
        </div>
        <div>
            <h3>Lets Connect</h3>
            <img src={social} alt="connect us" className='plm' />
        </div>
      </div>
      <h1 className='k66'>This is my Blog-Website Made by Kishan Mange with ❤️‍🔥 and ☕️</h1>
<h2 className='k66'>copyright by Kishan  2023</h2>
    </div>
  )
}

export default Footer
