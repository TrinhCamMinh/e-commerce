import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import Register from './Pages/Register';
import Detail from './Pages/Detail';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/productList' element={<ProductList />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/product' element={<Product />} />
                <Route path='/login' element={<Login />} />
                <Route path='/detail' element={<Detail />}/>
            </Routes>
        </BrowserRouter>
    );
}
