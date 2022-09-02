import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data'
import {mobile} from '../responsive'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1s ease;
    transform: translateX(${props => props.slideIndex * -100}vw); 
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`;

const Image = styled.img`
    height: 80%;
    margin-left: 20px;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    margin-right: 20px;
`;

const Title = styled.h1`
    font-size: 70px;
`;

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

export const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if(direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
        }
        else {
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0);
        }
    };

    return (
        <Container>
            <Arrow direction='left' onClick={() => handleClick('left')}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} style={{fontSize: '30px'}}/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item, index) => (
                    <Slide key={index} bg={item.bg}>    
                        <ImgContainer>
                            <Image src={item.img}/>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction='right' onClick={() => handleClick('right')}>
                <FontAwesomeIcon icon={faArrowAltCircleRight} style={{fontSize: '30px'}}/>
            </Arrow>
        </Container>
    )
}
