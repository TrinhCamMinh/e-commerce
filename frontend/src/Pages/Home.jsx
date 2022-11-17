import React from 'react';
import { Link } from 'react-router-dom';
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
            <Products page={0} />
            <Link to={`product`} style={{ textDecoration: 'none' }}>
                <div
                    style={{
                        padding: '12px 28px',
                        backgroundColor: '#FF4742',
                        color: '#FFFFFF',
                        borderRadius: '6px',
                        width: 'fit-content',
                        margin: '0 0 1rem 46rem',
                    }}
                >
                    <p style={{ fontSize: '16px', fontWeight: '800' }}>More</p>
                </div>
            </Link>
            <Newsletter />
            <Footer />
        </>
    );
};

export default Home;
