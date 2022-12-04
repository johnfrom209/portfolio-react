import React, { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Resume from './Resume';

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
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )
}