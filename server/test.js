const PasswordComplexity = require("joi-password-complexity");
const Joi = require("joi");

const schema = Joi.object({
    name: Joi.string().min(3).max(32),
    pass: new PasswordComplexity({
        min: 8,
        max: 26,
        lowerCase: 1,
        upperCase: 1,
        numeric: 1,
        requirementCount: 3
      }).required(),
      mail: Joi.string().email().required()
});

console.log(schema.validate({name: 'ali', mail: 'ali@gmail.com'}));