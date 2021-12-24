import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import Banner from '../Banner/Banner';
import IntroSocial from '../IntroSocial/IntroSocial';
import Service from '../Service/Service';

const Home = () => {
    return (
        <>
            <Navigation />
            <Banner />
            <About />
            <Service />
            <IntroSocial />
            <Footer />
        </>
    );
};

export default Home;