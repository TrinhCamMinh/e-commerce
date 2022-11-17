import React, { useState, useEffect } from 'react';
import { useGetProducts } from '../hooks/useGetProducts';
import styled from 'styled-components';
import ProductItem from './ProductItem';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export default function Products({ page }) {
    const [product, setProduct] = useState(null);
    const { getProductPerPage } = useGetProducts();

    useEffect(() => {
        const fetchProduct = async () => {
            const data = await getProductPerPage(page);
            setProduct(data);
        };

        fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);
    return <Container>{product && product.map((item, index) => <ProductItem key={index} item={item} />)}</Container>;
}
