import React from 'react';
import CV from '../../assets/cv.pdf'

const BtnH = () => {
    return(
        <div className='btnh'>
            <a href={CV} download className='btn'>Download Resume</a>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default BtnH