export const useGetProducts = () => {
    const getProducts = async () => {
        const response = await fetch('/api/products/');
        const json = response.json();
        return json;
    };
    return { getProducts };
};
