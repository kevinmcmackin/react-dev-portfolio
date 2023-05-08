import React from 'react'
import './about.css'
import ME from '../../assets/banana.jpeg'
import ME_LEAN from '../../assets/headshot_lean.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>A Little Bit</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME_LEAN} alt="Me smiling" />
                    </div>
                </div>
                <p className='about__desc'>
                    <span>Hello, my name is Kevin McMackin. I am a full-stack/front-end developer based in New Brunswick, Canada. </span>
                    <br />
                    <span>I graduated in 2022 with a degree in Mechanical Engineering from UNB. After discovering my passion for innovation and design during my studies, I decided to pivot to programming, where I can now leverage my problem-solving skills and apply my creative abilities to develop unique and impactful software solutions.</span>
                    <br />
                    <span>As such, I am eager to contribute my skills to a dynamic and forward-thinking organization at the forefront of technology and innovation.</span>
                </p>
            </div>
        </section>
    )
}

export default About