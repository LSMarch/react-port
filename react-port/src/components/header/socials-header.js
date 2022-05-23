import React from 'react'
import {BsLinkedin,BsGithub} from 'react-icons/bs'


const Socials = () => {
    return (
        <div className='socials'>
            <a href='https://linkedin.com/libby-marchetti' target='_blank' rel="noreferrer"><BsLinkedin /></a>
            <a href='https://github.com/LSMarch' target='_blank' rel="noreferrer"><BsGithub /></a>
        </div>
    )
}

export default Socials