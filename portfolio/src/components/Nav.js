import React, { useState } from 'react';

function Nav() {

    return (
        <div className='flex-1 bg-black text-white font-bold text-3xl '>
            <ul className='flex place-content-end mr-20'>
                <li className='p-5'><a href='#'>About Me</a> </li>
                <li className='p-5'><a href='#'> Portfolio</a> </li>
                <li className='p-5'><a href='#'>Resume </a> </li>
            </ul>
        </div>
    )
}

export default Nav;