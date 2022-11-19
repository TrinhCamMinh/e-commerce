import Announcement from '../Components/Announcement';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { useAuthContext } from '../hooks/useAuthContext';
import { useGetProducts } from '../hooks/useGetProducts';
import { useEffect, useState } from 'react';
const formatCurrency = require('format-currency');

export default function Admin() {
    const { user } = useAuthContext();
    const { getProducts } = useGetProducts();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const data = await getProducts();
            setProduct(data);
        };
        fetchProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Announcement />
            <NavBar />
            {user && <h1>{user.userName === 'TrinhCamMinh' ? <p>Hello admin</p> : <p>Hello guest</p>}</h1>}
            <button type='button' className='btn btn-success btn-lg'>
                Add product
            </button>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>image</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Brand</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Manipulate</th>
                    </tr>
                </thead>
                <tbody>
                    {product &&
                        product.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th scope='row'>{index + 1}</th>
                                    <th style={{ width: '12rem' }}>
                                        <img style={{ width: '30%' }} src={item.image} alt='product preview' />
                                    </th>
                                    <td>{item.name}</td>
                                    <td>{item.brand}</td>
                                    <td>{formatCurrency(item.price)} $</td>
                                    <td>
                                        <i className='me-4 fa-solid fa-eye' style={{ color: '#1290ec' }}></i>
                                        <i className='me-4 fa-solid fa-pen-to-square' style={{ color: '#ffff00' }}></i>
                                        <i className='me-4 fa-solid fa-trash' style={{ color: '#ff0000' }}></i>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
            <Footer />
        </>
    );
}
