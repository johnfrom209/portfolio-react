import React, { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Resume from './Resume';
import ContactMe from './Contact';

export default function Main() {
    const [currentPage, setCurrentPage] = useState('AboutMe');
    // check the currentpage

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }
        if (currentPage === 'Contact') {
            return <ContactMe />
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className='h-full'>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            <Footer />
            {renderPage()}
        </div>
    )
}