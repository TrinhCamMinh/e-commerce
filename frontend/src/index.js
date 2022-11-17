import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import { ReviewsContextProvider } from './contexts/ReviewContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <ReviewsContextProvider>
            <App />
        </ReviewsContextProvider>
    </AuthProvider>
);
