const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    console.log('got hit')
    try {
        const { error } = validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(400).send("Invalid email or password");

        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!validPassword)
            return res.status(400).send("Invalid email or password");

        const token = user.generateAuthToken();
        console.log(token)
        res.send(token);
    } catch (error) {
        console.log(error);
        res.send("An error occured");
    }
});

router.post('/details/:id', (req, res) => {
    console.log("test")
    const user = req.params.user;
    User.find({ "name" : user} , (err, detail) => {
      res.json(detail);
    });
  }); 

const validate = (user) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });
    return schema.validate(user);
};

module.exports = router;