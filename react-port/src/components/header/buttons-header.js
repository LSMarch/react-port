import React from 'react';
import Resume from '../../assets/webdev-resume.pdf'

const BtnH = () => {
    return(
        <div className='btnh'>
            <a href={Resume} download className='btn'>Download Resume</a>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default BtnH