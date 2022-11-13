import React from 'react';
import Announcement from '../Components/Announcement';
import Categories from '../Components/Categories';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
import Newsletter from '../Components/Newsletter';
import Products from '../Components/Products';
import { Slider } from '../Components/Slider';

const Home = () => {
    return (
        <>
            <Announcement />
            <NavBar />
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />
        </>
    );
};

export default Home;
