import React, { useState } from "react";
import Announcement from "../Components/Announcement";
import Categories from "../Components/Categories";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import Newsletter from "../Components/Newsletter";
import Products from "../Components/Products";
import Cart from "./Cart";
import { Slider } from "../Components/Slider";

const Home = () => {
    const [toggle, setToggle] = useState(true);
    const [cart, setCart] = useState([]);

    const [amount, setAmount] = useState(0);

    const handleClick = (item) => {
        setAmount(amount + 1);
        setCart([...cart, item]);
    };

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <div>
            <Announcement />
            <NavBar amount={amount} handleToggle={handleToggle} />
            {toggle ? (
                <div>
                    <Slider />
                    <Categories />
                    <Products onClick={handleClick} />
                    <Newsletter />
                    <Footer />
                </div>
            ) : (
                <Cart carts={cart} />
            )}
        </div>
    );
};

export default Home;
