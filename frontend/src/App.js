import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import React from 'react';
import { useAuthContext } from './hooks/useAuthContext';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Login from './Pages/Login';
import ProductList from './Pages/ProductList';
import Register from './Pages/Register';
import Detail from './Pages/Detail';
import Account from './Pages/Account';
import Search from './Pages/Search';

export default function App() {
    const { user } = useAuthContext();
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={user ? <Navigate to='/' /> : <Register />} />
                <Route path='/product' element={<ProductList />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
                <Route path='/detail/:id' element={<Detail />} />
                <Route path='/account' element={<Account />} />
                <Route path='/search/:query' element={<Search />} />
            </Routes>
        </BrowserRouter>
    );
}
