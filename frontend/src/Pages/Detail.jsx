import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProducts } from '../hooks/useGetProducts';
import { useGetReview } from '../hooks/useGetReview';
import { useReviewsContext } from '../hooks/useReviewsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
import Announcement from '../Components/Announcement';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const Container = styled.div`
    display: grid;
    grid-template-columns: 30rem 58rem;
`;

const Left = styled.div``;

const Right = styled.div``;

const Below = styled.div``;

export default function Detail() {
    const commentRef = useRef();
    const { id } = useParams();
    const { getProductByID, getProductByQuery } = useGetProducts();
    const { getReviewByID, postReview } = useGetReview();
    const { reviews } = useReviewsContext();
    const { user } = useAuthContext();
    const [product, setProduct] = useState(null);
    const [relatedProduct, setRelatedProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const data = await getProductByID(id);
            setProduct(data);
        };

        const fetchRelatedProduct = async () => {
            const data = await getProductByQuery(product.brand);
            setRelatedProduct(data);
        };

        const fetchReview = async () => {
            await getReviewByID(id);
        };

        fetchProduct();
        fetchRelatedProduct();
        fetchReview();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function createMarkup() {
        const data = product.description;
        return { __html: data };
    }

    const handleComment = async () => {
        console.log(commentRef.current.value);
        await postReview(id, user.userName, commentRef.current.value);
    };

    return (
        <>
            <Announcement />
            <NavBar />
            <Container>
                {product && (
                    <>
                        <Left>
                            <div>
                                <img
                                    className='bigImage'
                                    src={product.image}
                                    alt='main product'
                                    style={{
                                        height: '26rem',
                                        borderStyle: 'solid',
                                        borderWidth: 'thin',
                                        borderColor: '#ebebeb',
                                    }}
                                />
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', marginTop: '1rem' }}>
                                <img
                                    src={product.image}
                                    alt='small product'
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                        borderStyle: 'solid',
                                        borderWidth: 'thin',
                                        borderColor: '#ebebeb',
                                    }}
                                />
                            </div>
                        </Left>
                        <Right>
                            <h2 style={{ fontWeight: '400', marginBottom: '1rem' }}>{product.name}</h2>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <section style={{ color: 'yellow' }}>
                                    <i className='fa-solid fa-star'></i>
                                    <i className='fa-solid fa-star'></i>
                                    <i className='fa-solid fa-star'></i>
                                    <i className='fa-solid fa-star'></i>
                                    <i className='fa-solid fa-star'></i>
                                </section>
                                <section>
                                    <em>(2 customers review)</em>
                                </section>
                            </div>
                            <p style={{ fontWeight: 'bold', color: '#f65658', marginBottom: '1rem' }}>$140.00</p>
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '5rem 5rem 5rem',
                                    gap: '1rem',
                                    marginBottom: '1rem',
                                }}
                            >
                                <span
                                    style={{
                                        borderStyle: 'solid',
                                        borderWidth: 'thin',
                                        borderColor: '#ebebeb',
                                        padding: '10px 16px',
                                    }}
                                >
                                    {product.configuration.size}
                                </span>
                            </div>
                            <p style={{ color: '#77a464' }}>99994 in stock</p>
                            <div
                                style={{
                                    margin: '2rem 0',
                                    display: 'grid',
                                    gridTemplateColumns: '10rem 10rem',
                                    gap: '2rem',
                                }}
                            >
                                <div style={{ padding: '10px 16px' }}>
                                    <span
                                        style={{
                                            padding: '10px 16px',
                                            borderStyle: 'solid',
                                            borderColor: '#ebebeb',
                                            borderWidth: 'thin',
                                        }}
                                    >
                                        -
                                    </span>
                                    <span
                                        style={{
                                            padding: '10px 16px',
                                            borderStyle: 'solid',
                                            borderColor: '#ebebeb',
                                            borderWidth: 'thin',
                                        }}
                                    >
                                        1
                                    </span>
                                    <span
                                        style={{
                                            padding: '10px 16px',
                                            borderStyle: 'solid',
                                            borderColor: '#ebebeb',
                                            borderWidth: 'thin',
                                        }}
                                    >
                                        +
                                    </span>
                                </div>
                                <div style={{ padding: '10px 16px', backgroundColor: '#7FB6C5', color: '#fff' }}>
                                    <span>
                                        <i className='fa-solid fa-cart-shopping'></i>
                                    </span>
                                    <span style={{ fontWeight: 'bold', marginLeft: '8px' }}>Add to cart</span>
                                </div>
                                <div style={{ padding: '10px 16px', backgroundColor: '#000', color: '#fff' }}>
                                    <span>
                                        <i className='fa-regular fa-heart'></i>
                                    </span>
                                    <span style={{ fontWeight: 'bold', marginLeft: '8px' }}>Wishlist</span>
                                </div>
                                <div style={{ padding: '10px 16px', backgroundColor: '#000', color: '#fff' }}>
                                    <span>
                                        <i className='fa-solid fa-code-compare'></i>
                                    </span>
                                    <span style={{ fontWeight: 'bold', marginLeft: '8px' }}>Compare</span>
                                </div>
                            </div>
                            <div>
                                <p style={{ marginBottom: '1rem' }}>
                                    <strong>Category</strong>: Mobile phone
                                </p>
                                <p style={{ marginBottom: '1rem' }}>
                                    <strong>Tags</strong>:
                                    {product.tags.map((item, index) => {
                                        return (
                                            <span key={index} style={{ marginRight: '4px' }}>
                                                {item},
                                            </span>
                                        );
                                    })}
                                </p>
                            </div>
                            <h1>{product.name}'s configuration</h1>
                            <div>
                                <p style={{ backgroundColor: '#f5f5f5', width: '20rem' }}>
                                    {/* Screen: <span style={{ marginLeft: '6rem' }}>{product.configuration.screen}</span> */}
                                </p>
                                <p>
                                    {/* OS: <span style={{ marginLeft: '6rem' }}>{product.configuration.OS}</span> */}
                                </p>
                                <p style={{ backgroundColor: '#f5f5f5', width: '20rem' }}>
                                    Back Camera:{' '}
                                    {/* <span style={{ marginLeft: '6rem' }}>{product.configuration.FrontCamera}</span> */}
                                </p>
                                <p>
                                    Front Camera:{' '}
                                    {/* <span style={{ marginLeft: '6rem' }}>{product.configuration.BackCamera}</span> */}
                                </p>
                                <p style={{ backgroundColor: '#f5f5f5', width: '20rem' }}>
                                    {/* Chip: <span style={{ marginLeft: '6rem' }}>{product.configuration.Chip}</span> */}
                                </p>
                                <p>
                                    {/* Ram: <span style={{ marginLeft: '6rem' }}>{product.configuration.Chip}</span> */}
                                </p>
                                <p style={{ backgroundColor: '#f5f5f5', width: '20rem' }}>
                                    {/* SIM: <span style={{ marginLeft: '6rem' }}>{product.configuration.Sim}</span> */}
                                </p>
                                <p>
                                    Battery:
                                    {/* <span style={{ marginLeft: '6rem' }}>{product.configuration[0].Battery}</span> */}
                                </p>
                            </div>
                            <div>
                                <section style={{ marginBottom: '1rem' }}>
                                    <span style={{ marginRight: '2rem', color: 'blue' }}>Description</span>
                                </section>
                                <section style={{ width: '70%' }}>
                                    <div dangerouslySetInnerHTML={createMarkup()}></div>
                                </section>
                            </div>
                            <div style={{ display: 'flex', marginTop: '2rem' }}>
                                <div
                                    style={{
                                        padding: '24px 10px',
                                        borderStyle: 'solid',
                                        borderColor: '#ebebeb',
                                        borderWidth: 'thin',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        color: '#00aced',
                                    }}
                                >
                                    <span>
                                        <i className='fa-brands fa-square-twitter' style={{ fontSize: '4rem' }}></i>
                                    </span>
                                    <span>Tweet this product</span>
                                </div>
                                <div
                                    style={{
                                        padding: '24px 10px',
                                        borderStyle: 'solid',
                                        borderColor: '#ebebeb',
                                        borderWidth: 'thin',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        color: '#3b5998',
                                    }}
                                >
                                    <span>
                                        <i className='fa-brands fa-facebook' style={{ fontSize: '4rem' }}></i>
                                    </span>
                                    <span>Share on Facebook</span>
                                </div>
                                <div
                                    style={{
                                        padding: '24px 10px',
                                        borderStyle: 'solid',
                                        borderColor: '#ebebeb',
                                        borderWidth: 'thin',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        color: '#3fc387',
                                    }}
                                >
                                    <span>
                                        <i className='fa-solid fa-envelope' style={{ fontSize: '4rem' }}></i>
                                    </span>
                                    <span>Mail this product</span>
                                </div>
                            </div>
                        </Right>
                        <Below>
                            <section style={{ marginBottom: '1rem' }}>
                                <h1 style={{ marginBottom: '1rem' }}>YOU MAY ALSO LIKE</h1>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '1rem' }}>
                                    <article
                                        style={{
                                            textAlign: 'center',
                                            borderStyle: 'solid',
                                            borderWidth: 'thin',
                                            borderColor: '#ebebeb',
                                        }}
                                    >
                                        <img
                                            src='https://niche-24.woovinafree.com/wp-content/uploads/2018/01/product-16-300x300.jpg'
                                            alt='product'
                                        />
                                        <div>
                                            <em>Simple product 002</em>
                                            <p style={{ color: '#f65658' }}>$290.00</p>
                                        </div>
                                    </article>
                                </div>
                            </section>
                            <section>
                                <h1>RELATED PRODUCTS</h1>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '1rem' }}>
                                    {relatedProduct &&
                                        relatedProduct.map((item, index) => {
                                            return (
                                                <article
                                                    key={index}
                                                    style={{
                                                        textAlign: 'center',
                                                        borderStyle: 'solid',
                                                        borderWidth: 'thin',
                                                        borderColor: '#ebebeb',
                                                    }}
                                                >
                                                    <img
                                                        src={item.image}
                                                        style={{ width: '200px', height: '200px' }}
                                                        alt='related products'
                                                    />
                                                    <div>
                                                        <em>{item.name}</em>
                                                        <p style={{ color: '#f65658' }}>{item.price}</p>
                                                    </div>
                                                </article>
                                            );
                                        })}
                                </div>
                            </section>
                        </Below>
                    </>
                )}
            </Container>
            <div>
                <textarea cols='100' rows='5' placeholder='leave your comment here' ref={commentRef}></textarea>
                <br />
                <button
                    style={{
                        padding: '10px 24px',
                        backgroundColor: 'blue',
                        borderColor: 'transparent',
                        color: '#fff',
                        fontWeight: 'bold',
                        marginBottom: '2rem',
                    }}
                    onClick={handleComment}
                >
                    Post
                </button>
                {reviews &&
                    reviews.map((item, index) => {
                        return (
                            <div key={index}>
                                <section style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <img src='https://picsum.photos/50/50' alt='reviewer avatar' />
                                    <p>{item.review.name}</p>
                                </section>
                                <section>
                                    <p>{item.review.comment}</p>
                                    <small style={{ color: '#999' }}>{item.review.createdAt}</small>
                                </section>
                            </div>
                        );
                    })}
            </div>
            <Footer />
        </>
    );
}
