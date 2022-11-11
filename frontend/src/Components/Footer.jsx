import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { keyframes } from 'styled-components';
import Facebook from '../assets/facebook.png';
import Instagram from '../assets/instagram.png';
import Twitter from '../assets/twitter.png';
import { faMap } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: 'column' })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: 'none' })}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: '#fff8f8' })}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

export default function Footer() {
    return (
        <>
            <Container>
                <Left>
                    <Logo>MINHCT.</Logo>
                    <Description>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or random words which don't look even slightly
                        believable.
                    </Description>
                    <SocialContainer>
                        <SocialIcon>
                            <img src={Facebook} alt='facebook' />
                        </SocialIcon>

                        <SocialIcon>
                            <img src={Instagram} alt='instagram' />
                        </SocialIcon>

                        <SocialIcon>
                            <img src={Twitter} alt='twitter' />
                        </SocialIcon>
                    </SocialContainer>
                </Left>
                <Center>
                    <Title>Useful Links</Title>
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Cart</ListItem>
                        <ListItem>Man Fashion</ListItem>
                        <ListItem>Woman Fashion</ListItem>
                        <ListItem>Accessories</ListItem>
                        <ListItem>My Account</ListItem>
                        <ListItem>Order Tracking</ListItem>
                        <ListItem>Wishlist</ListItem>
                        <ListItem>Wishlist</ListItem>
                        <ListItem>Terms</ListItem>
                    </List>
                </Center>
                <Right>
                    <Title>Contacts</Title>
                    <ContactItem>
                        <FontAwesomeIcon style={{ marginRight: '10px' }} icon={faMap} />
                        9Q Lý Chiêu Hoàng
                    </ContactItem>
                    <ContactItem>
                        <FontAwesomeIcon style={{ marginRight: '10px' }} icon={faPhone} />
                        +84 907722143
                    </ContactItem>
                    <ContactItem>
                        <FontAwesomeIcon style={{ marginRight: '10px' }} icon={faEnvelope} />
                        trinhcamminh25112002@gmail.com
                    </ContactItem>
                    <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
                </Right>
            </Container>
        </>
    );
}
