import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'



const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Kevin McMackin</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/kevin-mcmackin/" className='footer__linkedin' target="_blank"><BsLinkedin /></a>
                <a href="https://github.com/kevinmcmackin" className='footer__github' target="_blank"><BsGithub /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Kevin McMackin. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer