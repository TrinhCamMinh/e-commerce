export const useGetProducts = () => {
    const getProducts = async () => {
        const response = await fetch('/api/product/');
        const json = await response.json();
        return json;
    };

    const getProductByID = async (id) => {
        const response = await fetch(`/api/product/id/${id}`);
        const json = await response.json();
        return json;
    };

    const getProductByQuery = async (query) => {
        const response = await fetch(`/api/product/query/${query}`);
        const json = await response.json();
        return json;
    };
    return { getProducts, getProductByID, getProductByQuery };
};
