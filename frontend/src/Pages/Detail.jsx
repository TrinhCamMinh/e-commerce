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
    return (
        <>
            <Announcement />
            <NavBar />
            <Container>
                <Left>
                    <div>
                        <img
                            src='https://niche-24.woovinafree.com/wp-content/uploads/2018/01/product-02.jpg'
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
                        {/* loop here  */}
                        <img
                            src='https://niche-24.woovinafree.com/wp-content/uploads/2018/01/product-02-100x100.jpg'
                            alt='small product'
                            style={{
                                width: '100px',
                                height: '100px',
                                borderStyle: 'solid',
                                borderWidth: 'thin',
                                borderColor: '#ebebeb',
                            }}
                        />
                        <img
                            src='https://niche-24.woovinafree.com/wp-content/uploads/2018/01/product-02-100x100.jpg'
                            alt='small product'
                            style={{
                                width: '100px',
                                height: '100px',
                                borderStyle: 'solid',
                                borderWidth: 'thin',
                                borderColor: '#ebebeb',
                            }}
                        />
                        <img
                            src='https://niche-24.woovinafree.com/wp-content/uploads/2018/01/product-02-100x100.jpg'
                            alt='small product'
                            style={{
                                width: '100px',
                                height: '100px',
                                borderStyle: 'solid',
                                borderWidth: 'thin',
                                borderColor: '#ebebeb',
                            }}
                        />
                        <img
                            src='https://niche-24.woovinafree.com/wp-content/uploads/2018/01/product-02-100x100.jpg'
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
                    <h2 style={{ fontWeight: '400', marginBottom: '1rem' }}>Simple Product 015</h2>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <section style={{ color: 'yellow' }}>
                            <i class='fa-solid fa-star'></i>
                            <i class='fa-solid fa-star'></i>
                            <i class='fa-solid fa-star'></i>
                            <i class='fa-solid fa-star'></i>
                            <i class='fa-solid fa-star'></i>
                        </section>
                        <section>
                            <em>(2 customers review)</em>
                        </section>
                    </div>
                    <p style={{ fontWeight: 'bold', color: '#f65658', marginBottom: '1rem' }}>$140.00</p>
                    <p style={{ marginBottom: '1rem' }}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </p>
                    <p style={{ color: '#77a464' }}>99994 in stock</p>
                    <div style={{ margin: '2rem 0', display: 'grid', gridTemplateColumns: '10rem 10rem', gap: '2rem' }}>
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
                                <i class='fa-solid fa-cart-shopping'></i>
                            </span>
                            <span style={{ fontWeight: 'bold', marginLeft: '8px' }}>Add to cart</span>
                        </div>
                        <div style={{ padding: '10px 16px', backgroundColor: '#000', color: '#fff' }}>
                            <span>
                                <i class='fa-regular fa-heart'></i>
                            </span>
                            <span style={{ fontWeight: 'bold', marginLeft: '8px' }}>Wishlist</span>
                        </div>
                        <div style={{ padding: '10px 16px', backgroundColor: '#000', color: '#fff' }}>
                            <span>
                                <i class='fa-solid fa-code-compare'></i>
                            </span>
                            <span style={{ fontWeight: 'bold', marginLeft: '8px' }}>Compare</span>
                        </div>
                    </div>
                    <div>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Category</strong>: Mobile phone
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Tags</strong>: apple, ios, iphone
                        </p>
                    </div>
                    <div>
                        <section style={{ marginBottom: '1rem' }}>
                            <span style={{ marginRight: '2rem' }}>Description</span>
                            <span style={{ marginRight: '2rem' }}>Additional Information</span>
                            <span>Reviews (2)</span>
                        </section>
                        <section style={{ width: '70%' }}>
                            <p>Description here</p>
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
                                <i class='fa-brands fa-square-twitter' style={{ fontSize: '4rem' }}></i>
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
                                <i class='fa-brands fa-facebook' style={{ fontSize: '4rem' }}></i>
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
                                <i class='fa-solid fa-envelope' style={{ fontSize: '4rem' }}></i>
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
                </Below>
            </Container>
            <Footer />
        </>
    );
}
