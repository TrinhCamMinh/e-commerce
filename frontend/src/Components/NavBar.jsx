import React, { useRef } from 'react';
import styled from 'styled-components';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { mobile } from '../responsive';

const Container = styled.div`
    height: 60px;
    ${mobile({ height: '50px' })};
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: '10px 0px' })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: 'none' })}
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
    ${mobile({ width: '50px' })}
`;

const Center = styled.div`
    flex: 1;
`;

const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    ${mobile({ fontSize: '24px' })}
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: 'center' })}
`;

const Vertical = styled.span`
    border-left: 1px solid;
    margin: 0px 10px;
    height: 16px;
`;

const linkStyle = {
    textDecoration: 'none',
    color: '#333',
};

const Cart = styled.div`
    height: 2rem;
    display: flex;
    align-items: center;
`;

const Image = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-right: 2rem;
`;

export default function NavBar() {
    const { user } = useAuthContext();
    const { logout } = useLogout();
    const searchRef = useRef();
    const navigate = useNavigate();

    const handleLogout = async (e) => {
        e.preventDefault();
        await logout();
    };

    const handleSearch = () => {
        navigate(`/search/${searchRef.current.value}`);
    };

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search' ref={searchRef} />
                        <FontAwesomeIcon
                            icon={faSearch}
                            style={{ color: 'gray', fontSize: 16 }}
                            onClick={handleSearch}
                        />
                    </SearchContainer>
                </Left>
                <Center>
                    <Link to='/' style={linkStyle}>
                        <Logo>MINHCT.</Logo>
                    </Link>
                </Center>
                <Right>
                    {!user && (
                        <>
                            <Link to='register' style={linkStyle}>
                                Register
                            </Link>
                            <Vertical />
                        </>
                    )}
                    {!user && (
                        <>
                            <Link to='login' style={linkStyle}>
                                Login
                            </Link>
                            <Vertical />
                        </>
                    )}
                    {user && (
                        <Image>
                            <img
                                src='https://picsum.photos/200/200'
                                alt='MINHCT avatar'
                                style={{ width: '38px', borderRadius: '6px' }}
                            />
                            <em>{user.userName}</em>
                            <i
                                className='fa-solid fa-right-from-bracket'
                                style={{ fontSize: '24px', color: '#ff4040' }}
                                onClick={handleLogout}
                            ></i>
                        </Image>
                    )}
                    <Link to='product' style={linkStyle}>
                        Item
                    </Link>
                    <Cart>
                        <FontAwesomeIcon style={{ marginLeft: '10px' }} icon={faShoppingCart} />
                    </Cart>
                </Right>
            </Wrapper>
        </Container>
    );
}
