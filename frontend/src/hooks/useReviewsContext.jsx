import { useContext } from 'react';
import { ReviewContext } from '../contexts/ReviewContext';

export const useReviewsContext = () => {
    const context = useContext(ReviewContext);
    if (!context) throw Error('useReviewsContext must be used inside an ReviewsContextProvider');
    return context;
};
