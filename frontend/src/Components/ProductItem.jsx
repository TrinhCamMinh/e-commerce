import { faCartShopping, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
const formatCurrency = require('format-currency');

const ProductInfo = styled.div`
    position: absolute;
    bottom: 4px;
    left: 4px;
    text-align: start;
    z-index: 20;
`;

const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all ease 0.5s;
`;

const Container = styled.div`
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info} {
        opacity: 1;
    }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    color: black;
    cursor: pointer;

    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;

export default function ProductItem({ item }) {
    const { postCart } = useCart();
    const { user } = useAuthContext();

    const handleAddCart = async () => {
        await postCart(user._id, item.name, item._id, item.image[0], item.configuration[0].Size[0].price);
        console.log('post cart successfully');
    };

    return (
        <Container>
            <Circle />
            <Image src={item.image} />
            <Link to={`/detail/${item._id}`}>
                <ProductInfo>
                    <em style={{ fontWeight: '800' }}>{item.name}</em>
                    <br />
                    <em style={{ color: '#d0021c', fontWeight: '800' }}>
                        {formatCurrency(item.price)}
                        <i className='fa-solid fa-dollar-sign' style={{ marginLeft: '4px' }}></i>
                    </em>
                </ProductInfo>
            </Link>
            <Info>
                <Icon>
                    <FontAwesomeIcon icon={faCartShopping} onClick={handleAddCart} />
                </Icon>
                <Icon>
                    <FontAwesomeIcon icon={faSearch} />
                </Icon>
                <Icon>
                    <FontAwesomeIcon icon={faHeart} />
                </Icon>
            </Info>
        </Container>
    );
}
