import React, { useRef } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { useSignUp } from '../hooks/useSignUp';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
        url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
            center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
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
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;

const Error = styled.p`
    color: #dc143c;
    font-weight: bold;
    font-style: italic;
`;

export default function Register() {
    const { error, signUp } = useSignUp();
    const userNameRef = useRef();
    const passwordRef = useRef();
    const emailRef = useRef();
    const phoneNumberRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signUp(
            userNameRef.current.value,
            passwordRef.current.value,
            phoneNumberRef.current.value,
            emailRef.current.value
        );
    };

    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder='User Name' type='text' ref={userNameRef} />
                    <Input placeholder='Email' type='email' ref={emailRef} />
                    <Input placeholder='Password' type='password' ref={passwordRef} />
                    <Input placeholder='Phone Number' type='text' ref={phoneNumberRef} />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accordance with the{' '}
                        <b>PRIVACY POLICY</b>
                    </Agreement>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <Button onClick={handleSubmit}>CREATE</Button>
                        {error && <Error>{error}</Error>}
                    </div>
                </Form>
            </Wrapper>
        </Container>
    );
}
