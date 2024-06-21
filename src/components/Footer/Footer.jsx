import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
function Footer() {
  return (
    <div className='footer' id='footer'>
         <div className="footer-content">
            <div className="footer-content-left">
                <h1 className='logo'>FOODie.</h1>
                <p>Craving something delicious? Swing by our fast-food joint for a taste of happiness—where every bite is a treat and satisfaction is guaranteed!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>545555545455</li>
                    <li>foodie.com</li>
                </ul>
            </div>
         </div>
         <hr />
         <p className='footer-copyright'>Copyright 2024 &copy; foodie.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer