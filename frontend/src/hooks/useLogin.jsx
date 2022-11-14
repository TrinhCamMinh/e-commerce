import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

export const useLogin = () => {
    const [error, setError] = useState(false);
    const { dispatch } = useAuthContext();

    const login = async (userName, password) => {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userName, password }),
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        } else {
            localStorage.setItem('user', JSON.stringify(json));

            //update state
            dispatch({ type: 'LOGIN', payload: json });

            console.log('login successfully!');
        }
    };
    return { login, error };
};
