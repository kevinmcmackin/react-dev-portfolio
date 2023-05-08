import React, { useState, useEffect, useRef } from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsFileEarmarkCode} from 'react-icons/bs'
import {MdChecklistRtl} from 'react-icons/md'
import {FaChalkboardTeacher} from 'react-icons/fa'
import {BiMessageSquareDots} from 'react-icons/bi'


const Nav = () => {
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
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
            <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><MdChecklistRtl /></a>
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsFileEarmarkCode /></a>
            <a href="#education" onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}><FaChalkboardTeacher /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDots /></a>
        </nav>
    )
}

export default Nav