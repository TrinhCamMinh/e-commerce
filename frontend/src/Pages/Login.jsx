import React, { useRef } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { useLogin } from '../hooks/useLogin';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
        url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
            center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: '75%' })}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`;

const Error = styled.p`
    color: #dc143c;
    font-weight: bold;
    font-style: italic;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;

const Link = styled.a`
    margin: 10px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

export default function Login() {
    const userNameRef = useRef();
    const passwordRef = useRef();
    const { login, error } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(userNameRef.current.value, passwordRef.current.value);
    };

    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder='username' ref={userNameRef} />
                    <Input placeholder='password' ref={passwordRef} />
                    {error && <Error>{error}</Error>}
                    <Button onClick={handleSubmit}>LOGIN</Button>
                    <Link>DO NOT REMEMBER THE PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    );
}
