import { useState } from 'react';

export const useSignUp = () => {
    const [error, setError] = useState(false);

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
            console.log('signup successfully!!');
        }
    };
    return { error, signUp };
};
