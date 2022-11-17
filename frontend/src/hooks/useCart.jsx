export const useCart = () => {
    const getCart = async (id) => {
        const response = await fetch(`/api/cart/${id}`);
        const json = await response.json();
        return json;
    };

    const postCart = async (userID, productName, productID, productImage, productPrice) => {
        const response = await fetch(`/api/cart/`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ userID, productName, productID, productImage, productPrice }),
        });
        const json = await response.json();
        return json;
    };
    return { getCart, postCart };
};
