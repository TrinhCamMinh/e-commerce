import { useState, useRef } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useUpdateAccount } from '../hooks/useUpdateAccount';
import { Link } from 'react-router-dom';
import Announcement from '../Components/Announcement';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
const moment = require('moment');

export default function Account() {
    const { user } = useAuthContext();
    const userNameRef = useRef();
    const emailRef = useRef();
    const phoneNumberRef = useRef();
    const passwordRef = useRef();
    const { updateAccount, error } = useUpdateAccount();
    const [showMessage, setShowMessage] = useState(false);

    const handleSubmit = async () => {
        await updateAccount(
            userNameRef.current.value,
            passwordRef.current.value,
            phoneNumberRef.current.value,
            emailRef.current.value
        );
        userNameRef.current.value = '';
        passwordRef.current.value = '';
        phoneNumberRef.current.value = '';
        emailRef.current.value = '';
        setShowMessage(true);
    };

    return (
        <>
            <Announcement />
            <NavBar />
            {user && (
                <>
                    <p style={{ marginLeft: '2rem', fontSize: '2rem' }}>
                        Profile:<strong>{user.userName}</strong>
                    </p>
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
                                    src='https://picsum.photos/200'
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
                                    <span style={{ marginRight: '11.5rem' }}>User Rating</span>
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
                                    <span style={{ marginRight: '10.2rem' }}>Member Since</span>
                                    <span>{moment(user.createdAt).fromNow()}</span>
                                </div>
                                <Link to={`/history/${user._id}`}>
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
                                            className='fa-sharp fa-solid fa-clock-rotate-left'
                                            style={{ marginRight: '4px' }}
                                        ></i>
                                        See {`${user.userName}'s`} order history
                                    </button>
                                </Link>
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
                                        value={user.userName}
                                        disabled
                                        style={{
                                            width: '80%',
                                            padding: '4px',
                                            borderStyle: 'solid',
                                            borderColor: '#f9f9f9',
                                            outline: 'transparent',
                                        }}
                                    />
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
                                        disabled
                                        value={user.email}
                                        style={{
                                            width: '80%',
                                            padding: '4px',
                                            borderStyle: 'solid',
                                            borderColor: '#f9f9f9',
                                            outline: 'transparent',
                                        }}
                                    />
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
                                        disabled
                                        value={`0${user.phoneNumber}`}
                                        style={{
                                            width: '80%',
                                            padding: '4px',
                                            borderStyle: 'solid',
                                            borderColor: '#f9f9f9',
                                            outline: 'transparent',
                                        }}
                                    />
                                </div>
                            </div>
                            <div style={{ margin: '2rem 0' }}>
                                <h1>Edited</h1>
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
                                        ref={userNameRef}
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
                                        onClick={() => userNameRef.current.focus()}
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
                                        ref={emailRef}
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
                                        onClick={() => emailRef.current.focus()}
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
                                        ref={phoneNumberRef}
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
                                        onClick={() => phoneNumberRef.current.focus()}
                                        style={{
                                            padding: '10px',
                                            backgroundColor: '#f89c2c',
                                            color: '#fff',
                                            borderRadius: '6px',
                                        }}
                                    ></i>
                                </div>
                                <input
                                    type='text'
                                    placeholder='please enter password to confirm'
                                    ref={passwordRef}
                                    style={{
                                        width: '80%',
                                        padding: '4px',
                                        borderStyle: 'solid',
                                        borderColor: '#f9f9f9',
                                        outline: 'transparent',
                                    }}
                                />
                                <br />
                                {error && <small style={{ color: 'red' }}>Incorrect password</small>}
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
                                onClick={handleSubmit}
                            >
                                <i className='fa-solid fa-check' style={{ marginRight: '8px' }}></i>
                                Submit
                            </button>
                            <br />
                            {showMessage && <small style={{ color: '#1fae66' }}>Save data successfully</small>}
                            <img
                                src='https://images.pexels.com/photos/954599/pexels-photo-954599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                alt='hello'
                                style={{ width: '100%', marginTop: '2rem' }}
                            />
                        </section>
                    </div>
                </>
            )}
            <Footer />
        </>
    );
}
