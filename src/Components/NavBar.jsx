import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {mobile} from '../responsive'

const Container = styled.div`
    height: 60px;
    ${mobile({height: '50px'})};
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding: '10px 0px'})}
`;
 
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: 'none'})}
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    outline: none;
    ${mobile({ width: "50px" })}
`;

const Center = styled.div`
    flex:1;
`;

const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    ${mobile({fontSize: '24px'})}
`;

const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex: 2, justifyContent: 'center'})}
`;

const Vertical = styled.span`
    border-left: 1px solid;    
    margin: 0px 10px;
    height: 16px;
`;

const Number = styled.span`
    margin-bottom: 14px;
    margin-left: 2px;
`;

const linkStyle = {
    textDecoration: "none",
    color: '#333',
};

const Cart = styled.div`
    height: 2rem;
    display: flex;
    align-items: center;
`;

export default function NavBar({amount, handleToggle}) {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search' />
                        <FontAwesomeIcon icon={faSearch} style={{color:'gray', fontSize:16}} />
                    </SearchContainer>
                </Left>
                <Center onClick={handleToggle}>
                    <Logo>MINHCT.</Logo>
                </Center>
                <Right>
                    <Link to='register' style={linkStyle}>Register</Link>
                    <Vertical />
                    <Link to='login' style={linkStyle}>Login</Link>
                    <Vertical />
                    <Link to='productList' style={linkStyle}>Item</Link>
                    <Cart onClick={handleToggle}>
                        <FontAwesomeIcon style={{marginLeft: '10px'}} icon={faShoppingCart} />
                        <Number children={amount}/>
                    </Cart>
                </Right>
            </Wrapper>
        </Container>
  )
}
