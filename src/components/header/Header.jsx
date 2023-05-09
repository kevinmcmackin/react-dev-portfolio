import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/headshot_no_bg.png'
import W from '../../assets/w.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <section id='header__section'>
            <div className="container header__container">
                <h5>Hello, I'm</h5>
                <h1>Kevin</h1>
                <img src={W} alt="me" className='header__me-img' />
                <img src={W} alt="me" className='header__me-img' />
                <img src={W} alt="me" className='header__me-img' />
                <img src={W} alt="me" className='header__me-img' />
                <img src={W} alt="me" className='header__me-img' />

                <h5 className='text-light'>A Fullstack Developer</h5>
                <CTA />
                <div className="me">
                    <img src={ME} alt="me" className='header__me-img' />
                    <HeaderSocials />
                </div>
            </div>
        </section>
    )
}

export default Header