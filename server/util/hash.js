const bcrypt = require('bcrypt');

const hashing = async (pass) => {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(pass, salt);
    return hashed;
}

module.exports = hashing;