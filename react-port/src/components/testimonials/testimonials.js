import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// Testimonial array
const data = [
    {
        avatar: AVTR1,
        name: 'Betty White',
        review: 'Truly a gem and pleasure to work with'
    },
    {
        avatar: AVTR2,
        name: 'Betty White',
        review: 'Truly a gem and pleasure to work with'
    },
    {
        avatar: AVTR3,
        name: 'Betty White',
        review: 'Truly a gem and pleasure to work with'
    },
    {
        avatar: AVTR4,
        name: 'Betty White',
        review: 'Truly a gem and pleasure to work with'
    },
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Reviews from clients</h5>
            <h2>Testimonials</h2>
            <div className='container test_container'>
                {
                    data.map(({avatar, name, review}, index) => {
                        return (
                            <article key={index} className='testimonial'>
                                <div className='client_avatar'>
                                    <img src={avatar} alt='avatar' />                        
                                </div>
                                <h5 className='client_name'>{name}</h5>
                                <small className='client_review'>{review}</small>
                            </article>
                        )
                    })
                }                 
            </div>
        </section>
    )
}

export default Testimonials