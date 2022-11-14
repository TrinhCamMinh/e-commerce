import { useAuthContext } from '../hooks/useAuthContext';
import Announcement from '../Components/Announcement';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

export default function Account() {
    const { user } = useAuthContext();
    return (
        <>
            <Announcement />
            <NavBar />
            {user && (
                <p style={{ marginLeft: '2rem', fontSize: '2rem' }}>
                    Profile:<strong>{user.userName}</strong>
                </p>
            )}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '30% 60%',
                    gap: '2rem',
                    padding: '2rem',
                }}
            >
                <section>
                    <div style={{ marginBottom: '2rem' }}>
                        <img
                            src='https://avatars.githubusercontent.com/u/101931421?v=4'
                            alt='preview avatar'
                            style={{ width: '100%', borderRadius: '6px' }}
                        />
                    </div>
                    <div>
                        <div
                            style={{
                                marginBottom: '4px',
                                borderStyle: 'solid',
                                borderLeftColor: 'transparent',
                                borderRightColor: 'transparent',
                                borderTopColor: '#dddddd',
                                borderBottomColor: '#dddddd',
                                borderWidth: 'thin',
                                backgroundColor: '#f9f9f9',
                                padding: '1rem',
                            }}
                        >
                            <span style={{ marginRight: '14rem' }}>Status</span>
                            <span
                                style={{
                                    backgroundColor: '#5cb85c',
                                    padding: '4px',
                                    color: '#fff',
                                }}
                            >
                                Active
                            </span>
                        </div>
                        <div style={{ marginBottom: '4px', padding: '1rem' }}>
                            <span style={{ marginRight: '11.5rem' }}>
                                User Rating
                            </span>
                            <span style={{ color: '#f89c2c' }}>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                            </span>
                        </div>
                        <div
                            style={{
                                marginBottom: '4px',
                                borderStyle: 'solid',
                                borderLeftColor: 'transparent',
                                borderRightColor: 'transparent',
                                borderTopColor: '#dddddd',
                                borderBottomColor: '#dddddd',
                                borderWidth: 'thin',
                                backgroundColor: '#f9f9f9',
                                padding: '1rem',
                            }}
                        >
                            <span style={{ marginRight: '10.2rem' }}>
                                Member Since
                            </span>
                            <span>November 14</span>
                        </div>
                    </div>
                </section>
                <section>
                    <div style={{ marginBottom: '2rem' }}>
                        <h1>Profile Setting</h1>
                    </div>
                    <div>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '2rem',
                                marginBottom: '1rem',
                            }}
                        >
                            <label htmlFor='userName'>Name</label>
                            <input
                                type='text'
                                id='userName'
                                style={{
                                    width: '80%',
                                    padding: '4px',
                                    borderStyle: 'solid',
                                    borderColor: '#f9f9f9',
                                    outline: 'transparent',
                                }}
                            />
                            <i
                                className='fa-solid fa-pencil'
                                style={{
                                    padding: '10px',
                                    backgroundColor: '#f89c2c',
                                    color: '#fff',
                                    borderRadius: '6px',
                                }}
                            ></i>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '2.14rem',
                                marginBottom: '1rem',
                            }}
                        >
                            <label htmlFor='emil'>Email </label>
                            <input
                                type='text'
                                id='email'
                                style={{
                                    width: '80%',
                                    padding: '4px',
                                    borderStyle: 'solid',
                                    borderColor: '#f9f9f9',
                                    outline: 'transparent',
                                }}
                            />
                            <i
                                className='fa-solid fa-pencil'
                                style={{
                                    padding: '10px',
                                    backgroundColor: '#f89c2c',
                                    color: '#fff',
                                    borderRadius: '6px',
                                }}
                            ></i>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '2rem',
                            }}
                        >
                            <label htmlFor='phone'>Phone</label>
                            <input
                                type='text'
                                id='phone'
                                style={{
                                    width: '80%',
                                    padding: '4px',
                                    borderStyle: 'solid',
                                    borderColor: '#f9f9f9',
                                    outline: 'transparent',
                                }}
                            />
                            <i
                                className='fa-solid fa-pencil'
                                style={{
                                    padding: '10px',
                                    backgroundColor: '#f89c2c',
                                    color: '#fff',
                                    borderRadius: '6px',
                                }}
                            ></i>
                        </div>
                    </div>
                    <button
                        style={{
                            color: '#fff',
                            backgroundColor: '#1fae66',
                            border: 'transparent',
                            padding: '10px 12px',
                            borderRadius: '8px',
                            marginTop: '1rem',
                        }}
                    >
                        <i
                            className='fa-solid fa-check'
                            style={{ marginRight: '8px' }}
                        ></i>
                        Submit
                    </button>
                    <img
                        src='https://images.pexels.com/photos/954599/pexels-photo-954599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        alt='hello'
                        style={{ width: '100%', marginTop: '2rem' }}
                    />
                </section>
            </div>
            <Footer />
        </>
    );
}
