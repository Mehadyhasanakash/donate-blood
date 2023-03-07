import React from 'react';
import Donner from '../components/Donner';
import Footer from '../components/Footer';
import Future from '../components/Future';
import Hero from '../components/Hero';


const Home = () => {
    return (
        <div>
            
            <Hero/>
            <Donner />
            <Future />

            <Footer />
        </div>
    );
};

export default Home;