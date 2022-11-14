import { useAuthContext } from '../hooks/useAuthContext';

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const logout = async () => {
        localStorage.removeItem('user');
        console.log(`logout successfully`);
        dispatch({ type: 'LOGOUT' });
    };
    return { logout };
};
