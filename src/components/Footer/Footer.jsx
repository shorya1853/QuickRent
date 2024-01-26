import React from 'react'
import './Footer.css'
import { FaInstagram, FaPinterestP, FaWhatsapp } from "react-icons/fa";
import { BiLogoQuora } from "react-icons/bi";
import { Link } from 'react-router-dom'


export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
           <BiLogoQuora size={'80'}/>
            <p>QuickRent</p>
        </div>
        <ul className="footer-links">
            <Link><li>Products</li></Link>
            <Link><li>About</li></Link>
            <Link to="/contact"><li>contact</li></Link>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-containter">
                <Link><FaInstagram size={'35'} color='black'/></Link>
            </div>
            <div className="footer-icons-containter">
                <Link><FaPinterestP size={'35'} color='black'/></Link>
            </div>
            <div className="footer-icons-containter">
                <Link><FaWhatsapp size={'35'} color='black'/></Link>
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>
                This is our Term and Conditions, which doesn't matter. Rupesh tu kuch add kar dena[smile face]
            </p>
            <hr/>
            <p>Copyright @ 2023 - All Right Reserved</p>
        </div>
    </div>
  )
}
