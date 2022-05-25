import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine, RiWhatsappLine} from 'react-icons/ri';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
// import 'react-scripts';

const Contact = () => {
    // const whatsApp = process.env.REACT_APP_WHATS_APP;
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        e.target.reset();
        emailjs.sendForm(process.env.REACT_APP_EJS_SERVICE, process.env.REACT_APP_EJS_TEMPLATE, form.current, process.env.REACT_APP_EJS_ID)        
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
                        <h5>lsmarchetti01@gmail.com</h5>
                        <a href='mailto:lsmarchetti01@gmail.com'>Send an Email</a>
                    </article>
                    <article className='option'>
                        <RiMessengerLine className='icon'/>
                        <h4>Messenger</h4>                        
                        <a href={process.env.REACT_APP_MESSENGER} target='_blank' rel="noreferrer">Send a Message</a>
                    </article>
                    <article className='option'>
                        <RiWhatsappLine className='icon'/>
                        <h4>WhatsApp</h4>                       
                        <a href={process.env.REACT_APP_WHATS_APP} target='_blank' rel="noreferrer">Send a Message</a>
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