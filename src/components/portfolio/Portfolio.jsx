import React from 'react'
import './portfolio.css'
import SS from '../../assets/ss.png';
import { BsArrowUpRightSquare } from 'react-icons/bs';
import YouTube from 'react-youtube';


const data = [
    {
        id: 1,
        image: SS,
        title: <span>Personal Business Website</span>,
        description: 
        <>
            <p className='portfolio__WIP-br'></p>
            <span className='portfolio__WIP'>(Work in Progress)</span>
        </>,
        github: 'https://github.com',
        wip: true,
        videoId: 'hIc5kU81MPc'
    },
    {
        id: 2, 
        image: SS,
        title: 'Used Book Ecommerce Web Store',
        description: 
            <>
                <span>This web store is a place where users can easily buy & sell their used books online. The marketplace connects book buyers and sellers from all over the world making it easy to find the perfect book at an affordable price.</span>
                <p className='portfolio__br'></p>
                <span>As a seller, you can easily list your used books for sale, set your prices, and manage your inventory. </span>
                <p className='portfolio__br'></p>
                <span>As a buyer, you can browse through the collection of used books, search for specific titles or authors, and compare prices from multiple sellers.</span>
            </>
        ,
        github: 'https://github.com/kevinmcmackin/node-ecommerce-app',
        wip: false,
        videoId: 'rMKmIEb0SEg'
    },
    {
        id: 3, 
        image: SS,
        title: "'Twitter Clone' Social Media App",
        description:
        <>
            <span>This project was made to create a social media application that mimics Twitter.com.</span>
            <p className='portfolio__br'></p>
            <span>The site includes key functionality from Twitter such as posting, liking, and following. You can easily interact with other users by sharing your thoughts, reposting and liking content, and building your network of followers.</span>
        </>
        ,
        github: 'https://github.com/kevinmcmackin/twitter-clone',
        wip: false,
        videoId: 'o_-s72H2YCU'
    }
]

const opts = {
    height: '250',
    width: '400',
    playerVars: {
        rel: 0,
        controls: 1
    },

}

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, description, github, wip, videoId}) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    {wip && (
                                        <div className='portfolio__ribbon-wrapper'>
                                            <div className="portfolio__ribbon">Current Project</div>
                                            <img src={image} alt={title} className='portfolio__WIP-bg' />
                                        </div>
                                    )}
                                    {!wip && (
                                        <div className='portfolio__yt-wrap'>
                                            <YouTube videoId={videoId} opts={opts} />
                                        </div>
                                    )}
                                </div>
                                <div className="portfolio__information">
                                    <h3 className='portfolio__title'>{title}</h3>
                                    <h5 className='portfolio__desc'>{description}</h5>
                                </div>
                                <div className="portfolio__item-cta">
                                    {!wip && (<span className='portfolio__asterics'>*This project was built as a way for me to better understand the tech stack it was built on, and is not currently a live website.</span>)}
                                    {!wip && (<a href={github} className='portfolio__github-btn' target='_blank' rel="noreferrer">GitHub <span><BsArrowUpRightSquare className='portfolio__arrow-out' /></span></a>)}
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio