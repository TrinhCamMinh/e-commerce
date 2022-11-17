import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from '../Components/NavBar';
import Announcement from '../Components/Announcement';
import Products from '../Components/Products';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';
import { mobile } from '../responsive';

const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({ margin: '0px 20px', display: 'flex', flexDirection: 'column' })};
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: '10px 0px' })}
`;

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
`;

const Option = styled.option``;

export default function ProductList() {
    const [page, setPage] = useState(0);
    return (
        <Container>
            <Announcement />
            <NavBar />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products</FilterText>
                    <Select defaultValue='Color'>
                        <Option value='Color' disabled>
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select defaultValue='Size'>
                        <Option value='Size' disabled>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products</FilterText>
                    <Select>
                        <Option>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products page={page} />
            <PaginationContainer>
                <button
                    onClick={() => setPage(0)}
                    style={{
                        padding: '10px 28px',
                        backgroundColor: 'pink',
                        borderRadius: '6px',
                        borderColor: 'transparent',
                        color: '#fff',
                    }}
                >
                    <h3 style={{ fontWeight: 'bold' }}>1</h3>
                </button>
                <button
                    onClick={() => setPage(1)}
                    style={{
                        padding: '10px 28px',
                        backgroundColor: 'pink',
                        borderRadius: '6px',
                        borderColor: 'transparent',
                        color: '#fff',
                    }}
                >
                    <h3 style={{ fontWeight: 'bold' }}>2</h3>
                </button>
                <button
                    onClick={() => setPage(2)}
                    style={{
                        padding: '10px 28px',
                        backgroundColor: 'pink',
                        borderRadius: '6px',
                        borderColor: 'transparent',
                        color: '#fff',
                    }}
                >
                    <h3 style={{ fontWeight: 'bold' }}>3</h3>
                </button>
            </PaginationContainer>
            <Newsletter />
            <Footer />
        </Container>
    );
}
