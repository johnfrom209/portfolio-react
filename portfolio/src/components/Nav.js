import React from 'react';

function Nav({ currentPage, handlePageChange }) {

    return (
        <nav className='flex flex-1 text-mainColor font-bold xl:text-xl xl:place-content-end '>
            <ul className='flex  '>
                <li className='p-5'><a
                    href='#AboutMe'
                    onClick={() => handlePageChange('AboutMe')}
                    className={currentPage === 'AboutMe' ? 'active:text-mColord active' : 'hover:text-mColorll nav-link active:text-mColord'}
                >
                    About Me</a> </li>
                <li className='p-5'><a
                    href='#Portfolio'
                    onClick={() => handlePageChange('Portfolio')}
                    // className='hover:text-mColorll'
                    className={currentPage === 'Portfolio' ? 'active:text-mColord active' : 'hover:text-mColorll nav-link active:text-mColord'}
                >
                    Portfolio</a> </li>
                <li className='p-5'><a
                    href='#Resume'
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? ' active' : 'hover:text-mColorll nav-link active:text-mColord'}
                >
                    Resume </a> </li>
                <li className='p-5'><a
                    href='#Contact'
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'hover:text-mColorll active' : 'hover:text-mColorll nav-link active:text-mColord'}
                >
                    Contact</a> </li>
            </ul>
        </nav>
    )
}

export default Nav;