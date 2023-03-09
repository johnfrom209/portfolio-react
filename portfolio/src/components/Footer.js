import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillMediumSquare } from 'react-icons/ai';

function Footer() {

    return (
        <footer className='block w-full mt-10'>
            <div className='text-center mx-0 my-auto'>
                <ul className='text-4xl'>
                    <li className='inline-block hover:shadow-mColorll hover:shadow-xl '>
                        <a href='https://github.com/johnfrom209'><FaGithubSquare /></a>
                    </li>
                    <li className='inline-block hover:shadow-mColorll hover:shadow-xl '>
                        <a href='https://www.linkedin.com/in/jonathandmoreno'><AiFillLinkedin /></a>
                    </li>
                    <li className='inline-block hover:shadow-mColorll hover:shadow-xl '>
                        <a href='https://medium.com/@johnfrom209/haml-vs-handlebars-70bfa523981d'><AiFillMediumSquare /></a>

                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;