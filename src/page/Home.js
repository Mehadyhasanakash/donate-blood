import React from 'react';
import Donner from '../components/Donner';
import Footer from '../components/Footer';
import Future from '../components/Future';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar/>
            
            <Donner/>
            <Future/>
            
            <Footer/>
        </div>
    );
};

export default Home;