const getHistory = (req, res) => {
    res.json('get user order history');
};

const createHistory = (req, res) => {
    res.json('create user order history');
};

module.exports = {
    getHistory,
    createHistory,
};
