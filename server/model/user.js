const mongoose = require("mongoose");
const PasswordComplexity = require("joi-password-complexity");
const Joi = require("joi");
const { productSchema } = require("./product");


const userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    favorites: [{type: mongoose.Types.ObjectId, ref: 'product'}] 
});

const User = mongoose.model('user', userSchema);

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