import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
function Footer() {
  return (
    <div className='footer' id='footer'>
         <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Enjoy the convenience of delicious, ready-to-eat meals with our premium frozen food selection. Savor the taste of freshness and quality, straight from your freezer to your table.</p>
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
                    <li>contact@zeeshanfoods.com</li>
                </ul>
            </div>
         </div>
         <hr />
         <p className='footer-copyright'>Copyright 2024 &copy; ZeeshanFoods.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer