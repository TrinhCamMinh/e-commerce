export const useHistory = () => {
    const getHistory = async (id) => {
        const response = await fetch(`/api/history/${id}`);
        const json = await response.json();
        return json;
    };

    return { getHistory };
};
