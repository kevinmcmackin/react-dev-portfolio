import React, { useState, useEffect } from 'react';
import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/About.jsx'
import Experience from './components/experience/Experience.jsx'
import Services from './components/services/Services.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Education from './components/education/Education.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'
import Loader from './components/loader/Loader.jsx'


const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.onload = () => {
          setLoading(false);
        };
    }, []);

    return (
        <>
            {loading ? <Loader /> : null}
            {!loading ? 
                <>
                    <Nav />
                    <Header />
                    <About /> 
                    <Experience /> 
                    <Portfolio />
                    <Education />
                    <Contact />
                    <Footer />
                </>
            : null}
        </>
    )
}

export default App