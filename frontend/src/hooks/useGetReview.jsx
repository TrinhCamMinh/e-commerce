import { useReviewsContext } from '../hooks/useReviewsContext';
export const useGetReview = () => {
    const { dispatch } = useReviewsContext();

    const getReviewByID = async (id) => {
        const response = await fetch(`/api/review/${id}`);
        const json = await response.json();
        if (response.ok) {
            dispatch({ type: 'SET_REVIEWS', payload: json });
        }
    };

    const postReview = async (productID, name, comment) => {
        const review = {
            name,
            comment,
        };
        const response = await fetch(`/api/review/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productID, review }),
        });
        const json = await response.json();
        if (response.ok) {
            dispatch({ type: 'CREATE_REVIEW', payload: json });
            console.log(review);
        }
    };

    return { getReviewByID, postReview };
};
