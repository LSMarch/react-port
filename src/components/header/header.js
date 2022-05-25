import React from 'react';
import BtnH from './buttons-header'
import ME from '../../assets/prof.jpg'
import Socials from './socials-header'
import './header.css'

const Header = () => {
    return(        
        <header>
            <div className='container header_container'>
                <h5>Hey there, I'm</h5>
                <h1>Libby Marchetti</h1>
                <h5 className='text-light'>Fullstack Developer</h5>
                <BtnH />
                <Socials />
                <div className='pic'>
                    <img src={ME} alt='neon space' />
                </div>                
                <a href='#contact' className='scroll_down'>Scroll Down</a>
            </div>

        </header>
    )
}

export default Header