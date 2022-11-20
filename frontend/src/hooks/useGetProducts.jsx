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

    const getProductPerPage = async (page) => {
        const response = await fetch(`/api/product/pagination?page=${page}`);
        const json = await response.json();
        return json;
    };

    const postProduct = async (form) => {
        const response = await fetch(`/api/product`, {
            method: 'POST',
            body: form,
        });
        const json = await response.json();
        if (!response.ok) console.log('post fail');
        else console.log('post success');
        return json;
    };

    return { getProducts, getProductByID, getProductByQuery, getProductPerPage, postProduct };
};
