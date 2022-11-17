import { createContext, useReducer } from 'react';

export const ReviewContext = createContext();

export const ReviewsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_REVIEWS':
            return {
                reviews: action.payload,
            };
        case 'CREATE_REVIEW':
            return {
                reviews: [action.payload, ...state.reviews],
            };
        default:
            return state;
    }
};

export const ReviewsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ReviewsReducer, {
        reviews: null,
    });

    console.log('ReviewContext state', state);

    return <ReviewContext.Provider value={{ ...state, dispatch }}>{children}</ReviewContext.Provider>;
};
