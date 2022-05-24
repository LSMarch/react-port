import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

// Array of Image objects to loop
const imgs = [
    {
        id: 1,
        image: IMG1,
        title: 'Crypto Currency Dashboard & Financial Visualization',
        github: 'https://github.com',
        demo: 'https://dribble.com/Alien_pixels'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Crypto Currency Dashboard & Financial Visualization',
        github: 'https://github.com',
        demo: 'https://dribble.com/Alien_pixels'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Crypto Currency Dashboard & Financial Visualization',
        github: 'https://github.com',
        demo: 'https://dribble.com/Alien_pixels'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Crypto Currency Dashboard & Financial Visualization',
        github: 'https://github.com',
        demo: 'https://dribble.com/Alien_pixels'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Crypto Currency Dashboard & Financial Visualization',
        github: 'https://github.com',
        demo: 'https://dribble.com/Alien_pixels'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Crypto Currency Dashboard & Financial Visualization',
        github: 'https://github.com',
        demo: 'https://dribble.com/Alien_pixels'
    },
]

const Portfolio = () => {
    return(
        <section id='portfolio'>
            <h5>My Works</h5>
            <h2>Portfolio</h2>
            <div className='container port_container'>
                {
                    imgs.map(({id, image, title, github, demo}) => {
                        return (
                        <article key={id} className='port_item'>
                            <div className='port_img'>
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className='port_cta'>
                                <a href={github} className='btn' target='_blank' rel="noreferrer">GitHub</a>
                                <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                            </div>
                        </article>
                        )
                    })
                }


                {/* <article className='port_item'>
                    <div className='port_img'>
                        <img src={IMG1} alt='' />
                    </div>
                    <h3>Project title</h3>
                    <div className='port_cta'>
                        <a href='https://github.com/LSMarch' className='btn' target='_blank' rel="noreferrer">GitHub</a>
                        <a href='https://dribble.com/Alien_pixels' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className='port_item'>
                    <div className='port_img'>
                        <img src={IMG1} alt='' />
                    </div>
                    <h3>Project title</h3>
                    <div className='port_cta'>
                        <a href='https://github.com/LSMarch' className='btn' target='_blank' rel="noreferrer">GitHub</a>
                        <a href='https://dribble.com/Alien_pixels' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className='port_item'>
                    <div className='port_img'>
                        <img src={IMG1} alt='' />
                    </div>
                    <h3>Project title</h3>
                    <div className='port_cta'>
                        <a href='https://github.com/LSMarch' className='btn' target='_blank' rel="noreferrer">GitHub</a>
                        <a href='https://dribble.com/Alien_pixels' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className='port_item'>
                    <div className='port_img'>
                        <img src={IMG1} alt='' />
                    </div>
                    <h3>Project title</h3>
                    <div className='port_cta'>
                        <a href='https://github.com/LSMarch' className='btn' target='_blank' rel="noreferrer">GitHub</a>
                        <a href='https://dribble.com/Alien_pixels' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className='port_item'>
                    <div className='port_img'>
                        <img src={IMG1} alt='' />
                    </div>
                    <h3>Project title</h3>
                    <div className='port_cta'>
                        <a href='https://github.com/LSMarch' className='btn' target='_blank' rel="noreferrer">GitHub</a>
                        <a href='https://dribble.com/Alien_pixels' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article> */}
            </div>
        </section>
    )
}

export default Portfolio