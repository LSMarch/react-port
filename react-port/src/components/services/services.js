import React from 'react';
import './services.css';
import {BsCheck} from 'react-icons/bs';

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Do</h5>
            <h2>Services</h2>
            <div className='container services_container'>
                <article className='service'>
                    <div className='service_head'>
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                            <BsCheck className='service_icon' />
                            <p>Blah blah blah yada yada yada</p>
                        </li>
                        <li>
                            <BsCheck className='service_icon' />
                            <p>Blah blah blah yada yada yada</p>
                        </li>
                        <li>
                            <BsCheck className='service_icon' />
                            <p>Blah blah blah yada yada yada</p>
                        </li>
                        <li>
                            <BsCheck className='service_icon' />
                            <p>Blah blah blah yada yada yada</p>
                        </li>
                    </ul>
                </article>
                {/* End of UX/UI */}
                <article className='service'>
                    <div className='service_head'>
                        <h3>Web Development</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                            <BsCheck className='service_icon' />
                            <p>Blah blah blah yada yada yada</p>
                        </li>
                        <li>
                            <BsCheck className='service_icon' />
                            <p>Blah blah blah yada yada yada</p>
                        </li>
                        <li>
                            <BsCheck className='service_icon' />
                            <p>Blah blah blah yada yada yada</p>
                        </li>
                        <li>
                            <BsCheck className='service_icon' />
                            <p>Blah blah blah yada yada yada</p>
                        </li>
                    </ul>
                </article>
                {/* End Web Development */}
                <article className='service'>
                    <div className='service_head'>
                        <h3>Content Creation</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                            <BsCheck className='service_icon' />
                            <p>Blah blah blah yada yada yada</p>
                        </li>
                        <li>
                            <BsCheck className='service_icon' />
                            <p>Blah blah blah yada yada yada</p>
                        </li>
                        <li>
                            <BsCheck className='service_icon' />
                            <p>Blah blah blah yada yada yada</p>
                        </li>
                        <li>
                            <BsCheck className='service_icon' />
                            <p>Blah blah blah yada yada yada</p>
                        </li>
                    </ul>
                </article>
                {/* End Content Creation */}
            </div>
        </section>
    )
}

export default Services