const getUser = (req, res) => {
    res.json('get specific user');
};

const signup = (req, res) => {
    res.json('signup user');
};

const login = (req, res) => {
    res.json('login user');
};

module.exports = {
    getUser,
    signup,
    login,
};
