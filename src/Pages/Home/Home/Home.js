import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <>
            <Navigation />
            <Banner />
            <About />
            <Footer />
        </>
    );
};

export default Home;