const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const Joi = require("joi");
var cors = require('cors')

const userSchema = new Schema({
    name: {
        type: String,
       
    },
    email: {
        type: String,
      
    },
    password: {
        type: String,
      
    },
    conf_pass: {
        type: String,
      
    },
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id, name:this.name }, process.env.JWTPRIVATEKEY);
    return token;
};

const User = mongoose.model("user", userSchema);

const validate = (user) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        conf_pass: Joi.string().required(),
    });
    return schema.validate(user);
};

module.exports = { User, validate };