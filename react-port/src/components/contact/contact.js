import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine, RiWhatsappLine} from 'react-icons/ri';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        e.target.reset();
        emailjs.sendForm('service_azyj87b', 'template_cdeueo8', form.current, '9oFSmBTZbI9Ievl59')        
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>
            <div className='container contact_container'>
                <div className='options'>
                    <article className='option'>
                        <MdOutlineEmail className='icon'/>
                        <h4>Email</h4>
                        <h5>someemail@whereever.com</h5>
                        <a href='mailto:someemail@whereever.com'>Send a Message</a>
                    </article>
                    <article className='option'>
                        <RiMessengerLine className='icon'/>
                        <h4>Messenger</h4>
                        <h5>someemail@whereever.com</h5>
                        <a href='https://facebook.com' target='_blank' rel="noreferrer">Facebook</a>
                    </article>
                    <article className='option'>
                        <RiWhatsappLine className='icon'/>
                        <h4>Email</h4>
                        <h5>someemail@whereever.com</h5>
                        {/* <a href='https://api.whatsapp.com/send?phone=123456513241234 plus country code */}
                        <a href='https://whatsapp.com' target='_blank' rel="noreferrer">WhatsApp</a>
                    </article>
                </div>
                {/* End Contact Options */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Full Name' required />
                    <input type='email' name='email' placeholder='Your Email' required />
                    <textarea name='message' rows='7' placeholder='Your Message' required />
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact