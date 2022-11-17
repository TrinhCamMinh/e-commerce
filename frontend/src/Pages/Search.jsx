import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProducts } from '../hooks/useGetProducts';
import styled from 'styled-components';
import ProductItem from '../Components/ProductItem';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
export default function Search() {
    const { getProductByQuery } = useGetProducts();
    const [product, setProduct] = useState(null);
    const { query } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            const data = await getProductByQuery(query);
            setProduct(data);
        };
        fetchProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    return (
        <>
            <NavBar />
            <Container>{product && product.map((item, index) => <ProductItem key={index} item={item} />)}</Container>
            <Footer />
        </>
    );
}
