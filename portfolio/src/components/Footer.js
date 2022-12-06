import React from 'react';
import { goMarkGithub } from 'react-icons/go';
import { AiFillLinkedin } from 'react-icons/ai';

function Footer() {

    return (
        <div className='absolute bottom-0 mt-5 m-auto w-full h-10'>
            <ul className='block m-auto'>
                <li className='inline-block'> <goMarkGithub /> Hold</li>
                <li className='inline-block'> <AiFillLinkedin />  Hold</li>
                <li className='inline-block'>Placeholder</li>
            </ul>
        </div>
    )
}

export default Footer;