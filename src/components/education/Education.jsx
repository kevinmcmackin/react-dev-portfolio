import React from 'react'
import './education.css'
import { RxDotFilled } from 'react-icons/rx';

// logos
import harvard_logo from '../../assets/harvard.png'
import educative from '../../assets/educative.png'
import FCC from '../../assets/FCC_logo.png'
import Udemy from '../../assets/Udemy.png'
import unb from '../../assets/unblogo.png'

// certs
import cs50 from '../../assets/cs50.jpeg'
import python from '../../assets/python.png'
import java from '../../assets/Java_cert.png'
import JS from '../../assets/JS_cert.PNG'
import web_design from '../../assets/FCC_web_design.png'
import angular from '../../assets/angular_cert.jpg'
import fullstack from '../../assets/fullstack_udemy.jpeg'
import diploma from '../../assets/diploma.jpeg'

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        photo: diploma,
        course: false,
        company_photo: unb,
        company: 'UNB ',
        title: 'Bachelor of Science in Mechanical Engineering',
        description: 
        <>
            <span>
                In May 2022, I completed my Bachelor of Science in Mechanical Engineering from the University of New Brunswick, Fredericton. 
            </span>
            <p className='education__br'></p>
            <span>
                Some notable courses I took during my degree which have helped me in my programming journey include:
            </span>
            <p className='education__br'></p>
            <span>
                <ul>
                    <li><RxDotFilled className='portfolio__rx-dot'/><span className='fleeex'>Programming & Problem Solving for Engineers</span></li>
                    <li><RxDotFilled className='portfolio__rx-dot'/>Design Optimization</li>
                    <li><RxDotFilled className='portfolio__rx-dot'/>Problems & Statistics for Engineers</li>
                    <li><RxDotFilled className='portfolio__rx-dot'/>Multivariable Calculus for Engineers</li>
                </ul>
            </span>
        </>
    },
    {
        photo: cs50,
        course: true,
        company_photo: harvard_logo,
        company: 'Harvard',
        title: 'CS50 - Introduction to Computer Science.',
        description: 
        <span>
            Harvard's CS50 course delivers a ground-up approach to computer science and programming for both beginners and experienced programmers. 
            The course covers algorithms and data structures, web development, computer hardware and software fundamentals, and many coding languages. 
            Additionally, it teaches fundamental computer science concepts such as abstraction, algorithms, and data representation.
        </span>
    },
    {
        photo: python,
        course: true,
        company_photo: educative,
        company: 'Educative',
        title: 'Learn Python 3 from Scratch',
        description: 
        <span>
            "Learn Python 3 from Scratch" is a beginner-friendly online course offered by Educative. 
            It covers introductory topics such as data types, control structures, functions, and modules, and gradually progresses to more advanced concepts like object-oriented programming and file handling. 
            Throughout the course, learners work on several hands-on projects to reinforce their understanding of the language. 
        </span>
    },
    {
        photo: java,
        course: true,
        company_photo: educative,
        company: 'Educative',
        title: 'Java for Programmers',
        description: 
        <span>
            "Java for Programmers" is a comprehensive course that teaches the fundamentals of Java programming to experienced programmers. 
            The course covers object-oriented programming, data structures, and algorithms, and provides hands-on learning opportunities through coding exercises and projects. 
            By the end of the course, students have the skills to work with both built-in and external libraries to build their own Java applications.
        </span>
    },
    {
        photo: JS,
        course: true,
        company_photo: FCC,
        company: 'freeCodeCamp',
        title: 'JavaScript Data Structures and Algorithms',
        description: 
        <span>
            The "JavaScript Data Structures and Algorithms" course teaches intermediate JavaScript programmers to implement data structures like linked lists, stacks, queues, trees, and algorithms like searching, sorting, and graph traversal. 
            Students also learn to analyze algorithm efficiency using big O notation. 
            Through challenges and projects, students gain practical experience in using these concepts.
        </span>
    },
    {
        photo: web_design,
        course: true,
        company_photo: FCC,
        company: 'freeCodeCamp',
        title: 'Responsive Web Design',
        description: 
        <span>
            The "Responsive Web Design" course equips students with the skills to create websites that are responsive, accessible, and adhere to best practices. 
            Using HTML, CSS, and JavaScript, students learn to create flexible layouts and elements that adapt to any screen size. 
            Through hands-on coding projects, students gain practical experience and a solid understanding of responsive design.
        </span>
    },
    {
        photo: angular,
        course: true,
        company_photo: Udemy,
        company: 'udemy',
        title: 'Angular - The Complete Guide',
        description: 
        <span>
            "Angular - The Complete Guide" is a comprehensive course that covers everything from setting up an Angular app to deploying it, including components, directives, services, forms, HTTP access, authentication, and more. 
            With hands-on learning through a complete project and the Angular CLI, students gain the skills to create modern, complex, responsive, and scalable web applications with Angular 14 and establish themselves as front-end developers.
        </span>
    },
    {
        photo: fullstack,
        course: true,
        company_photo: Udemy,
        company: 'udemy',
        title: 'NodeJS - The Complete Guide',
        description: 
        <span>
            "Node.js - The Complete Guide" is an extensive course that covers the practical and theoretical aspects of Node.js for experienced developers. 
            It includes topics such as Node.js basics, working with SQL and MongoDB databases, REST and GraphQL APIs, automated testing, deploying a Node.js application, and more. 
            Upon completion, students have a thorough understanding of Node.js and the ability to build fast and scalable server-side web applications.
        </span>
    }
]

const Education = () => {
    return (
        <section id='education'>
            <h5>Formal & Informal</h5>
            <h2>Education</h2>

            <Swiper className="container education__container"
             // install Swiper modules
            modules={[Pagination, Navigation]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            >
                {
                    data.map(({photo, course, company_photo, company, title, description}, index) => {
                    return (
                        <SwiperSlide key={index} className="education">
                            <div className="education__wrap">
                                <img src={photo} alt="certification" className='education__photo-photo' />
                                <div className="education__right">
                                    <div className="education__company">
                                        <div className="education__company-photo-div">
                                            <img src={company_photo} alt="Avatar One" className='education__company-photo' />
                                        </div>
                                        <div className="education__company-titles">
                                            {course ? <span className='education__course'>*course</span> : null }
                                            <h4 className='course__name'>{title}</h4>
                                            <h4 className='company__name'>{company}</h4>
                                        </div>
                                    </div>
                                    <p className='education__description'>
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Education