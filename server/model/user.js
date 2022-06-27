const mongoose = require("mongoose");
const PasswordComplexity = require("joi-password-complexity");
const Joi = require("joi");


const userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String
});

const User = mongoose.model('user', userSchema);

const schema = Joi.object({
    pass: new PasswordComplexity({
        min: 8,
        max: 26,
        lowerCase: 1,
        upperCase: 1,
        numeric: 1,
        requirementCount: 3
      }),
      mail: Joi.string().email().required()
});

const userValidation = (user) => {
    const schema = Joi.object({
        username: Joi.string().min(3).max(32).required(),
        password: new PasswordComplexity({
            min: 8,
            max: 26,
            lowerCase: 1,
            upperCase: 1,
            numeric: 1,
            requirementCount: 3
          }).required(),
          email: Joi.string().email().required()
    });
    return schema.validate(user);
}

module.exports = {User, userValidation};