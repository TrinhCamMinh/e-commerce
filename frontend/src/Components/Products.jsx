import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export default function Products() {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch('/api/product/');
            const json = await response.json();
            setProduct(json);
        };

        fetchProduct();
    }, []);
    return (
        <Container>
            {product && product.map((item, index) => <ProductItem key={index} item={item} />)}
        </Container>
    );
}
