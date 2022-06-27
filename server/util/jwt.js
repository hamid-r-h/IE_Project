const jwt = require('jsonwebtoken');

const getToken = (payload) => {
    const token = jwt.sign(payload, process.env.JWT_PRIVATE_KEY);
    return token;
}
module.exports = getToken;