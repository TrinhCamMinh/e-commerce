import { useAuthContext } from '../hooks/useAuthContext';
import { useState } from 'react';
export const useUpdateAccount = () => {
    const { user, dispatch } = useAuthContext();
    const [error, setError] = useState(false);
    const updateAccount = async (userName, password, phoneNumber, email) => {
        const response = await fetch(`/api/user/${user._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userName, password, phoneNumber, email }),
        });
        const json = await response.json();
        if (!response.ok) {
            console.log('update failed');
            setError(true);
        } else {
            console.log('update successful');
            dispatch({ type: 'LOGIN', payload: json });
        }
    };
    return { updateAccount, error };
};
