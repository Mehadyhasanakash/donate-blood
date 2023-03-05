import React from 'react';
import Donner from '../components/Donner';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <div>
            <Donner/>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;