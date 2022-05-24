import React from 'react';
import Pic from '../../assets/neon-space-1.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers, FiFolder} from 'react-icons/fi';
import './about.css'


const About = () => {
    return(
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About Me</h2>
            <div className='about_container container'>
                <div className='about_me'>
                    <div className='about_me-img'>
                        <img src={Pic} alt='neon space' />
                    </div>
                </div>
                <div className='about_content'>
                    <div className='about_cards'>
                        <article className='about_card'>
                            <FaAward className='about_icon'/>
                            <h5>Experience</h5>
                            <small>Fresh of the block</small>
                        </article>
                        <article className='about_card'>
                            <FiUsers className='about_icon'/>
                            <h5>Clients</h5>
                            <small>So many</small>
                        </article>
                        <article className='about_card'>
                            <FiFolder className='about_icon'/>
                            <h5>Projects</h5>
                            <small>All amazing</small>
                        </article>
                    </div>
                    <p>
                        Whole lot of filler text
                    </p>
                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About