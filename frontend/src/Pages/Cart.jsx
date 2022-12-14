import { faAdd, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useParams } from 'react-router-dom';
import { mobile } from '../responsive';
import { useCart } from '../hooks/useCart';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: '10px' })}
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === 'filled' && 'none'};
    background-color: ${(props) => (props.type === 'filled' ? 'black' : 'transparent')};
    color: ${(props) => props.type === 'filled' && 'white'};
`;

const TopTexts = styled.div`
    ${mobile({ display: 'none' })}
`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: 'column' })}
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 2rem;
    ${mobile({ flexDirection: 'column' })}
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const Color = styled.div`
    display: flex;
`;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: '5px 15px' })}
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: '20px' })}
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === 'total' && '500'};
    font-size: ${(props) => props.type === 'total' && '24px'};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`;

const Cart = () => {
    const { id } = useParams();
    const { getCart } = useCart();
    const [cart, setCart] = useState(null);
    const number = [];

    const calculateTotal = (total, number) => {
        return total + number;
    };

    useEffect(() => {
        const fetchCart = async () => {
            const data = await getCart(id);
            setCart(data);
        };
        fetchCart();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <NavBar />
            <Wrapper>
                <Top>
                    <Link to='/product'>
                        <TopButton>CONTINUE SHOPPING</TopButton>
                    </Link>
                    <TopTexts>
                        <TopText>Shopping Bag (0)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type='filled'>CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            {cart &&
                                cart.map((item, index) => {
                                    return (
                                        <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                                            <ProductDetail>
                                                <Image src={item.productImage} />
                                                <Details>
                                                    <ProductName>
                                                        <b>Product:{item.productName}</b>
                                                    </ProductName>
                                                    <ProductId>
                                                        <b>ID:{item.productID}</b>
                                                    </ProductId>
                                                    <Color>
                                                        <ProductColor color='black' />
                                                        <ProductColor color='pink' />
                                                        <ProductColor color='green' />
                                                        <ProductColor color='gray' />
                                                    </Color>
                                                    <ProductSize>
                                                        <b>Size:128GB</b>
                                                    </ProductSize>
                                                </Details>
                                            </ProductDetail>
                                            <PriceDetail>
                                                <ProductAmountContainer>
                                                    <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faAdd} />
                                                    <ProductAmount></ProductAmount>
                                                    <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faMinus} />
                                                </ProductAmountContainer>
                                                <ProductPrice>
                                                    {item.productPrice}
                                                    {number.push(item.productPrice)}
                                                </ProductPrice>
                                            </PriceDetail>
                                        </div>
                                    );
                                })}
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>5.90$</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>-5.90$ </SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type='total'>
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>
                                {number.reduce(calculateTotal, 0)}
                                {console.log(calculateTotal)}
                            </SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Cart;
