import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import React from 'react';
import { useAuthContext } from './hooks/useAuthContext';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Login from './Pages/Login';
import ProductList from './Pages/ProductList';
import Register from './Pages/Register';
import Detail from './Pages/Detail';

export default function App() {
    const { user } = useAuthContext();
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={user ? <Navigate to='/' /> : <Register />} />
                <Route path='/productList' element={<ProductList />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
                <Route path='/detail' element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
}
