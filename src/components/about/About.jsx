import React, { useState, useEffect } from 'react'
import './about.css'
import ME_LEAN from '../../assets/headshot_lean.jpg'

const About = () => {
    const [activeNav, setActiveNav] = useState('#')
    useEffect(() => {
        window.addEventListener("scroll", () => {
            const sections = document.querySelectorAll('section')

            let currentSection = '#'
            sections.forEach(section => {
                const sectionTop = section.offsetTop
                const sectionHeight = section.clientHeight
                if (window.pageYOffset >= sectionTop - sectionHeight / 2) {
                    currentSection = `#${section.id}`
                }
            })
            setActiveNav(currentSection)
        })
    }, [])

    return (
        <section id='about'>
            <h5>A Little Bit</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me" >
                    <div className={`about__me-image ${activeNav === '#about' ? 'active__scroll' : ''}`}>
                        <img src={ME_LEAN} alt="Me smiling" />
                    </div>
                </div>
                <p className='about__desc'>
                    <span>Hello, my name is Kevin McMackin. I am a full-stack/front-end developer based in New Brunswick, Canada. </span>
                    <p className='about__br'></p>
                    <span>I graduated in 2022 with a degree in Mechanical Engineering from UNB. After discovering my passion for innovation and design during my studies, I decided to pivot to programming, where I can now leverage my problem-solving skills and apply my creative abilities to develop unique and impactful software solutions.</span>
                    <p className='about__br'></p>
                    <span>A such, I am eager to contribute my skills to a dynamic and forward-thinking organization at the forefront of technology and innovation.</span>
                </p>
            </div>
        </section>
    )
}

export default About