import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

export const useSignUp = () => {
    const [error, setError] = useState(false);
    const { dispatch } = useAuthContext();

    const signUp = async (userName, password, phoneNumber, email) => {
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userName, password, phoneNumber, email }),
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        } else {
            //save to local storage
            localStorage.setItem('user', JSON.stringify(json));

            //update state
            dispatch({ type: 'LOGIN', payload: json });

            console.log('signup successfully!!');
        }
    };
    return { error, signUp };
};
