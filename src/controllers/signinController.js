const User = require('../models/user.model');
const joi = require('joi'); 
const bcrypt = require('bcrypt');

exports.validateLogin = async (req, res, next) => {
    const loginPayload = req.body;
    try {
        await loginValidate.validateAsync(loginPayload);
        next();
    } catch (err) {
        // console.log(err);
        return res.status(406).send(err.details[0].message);
    }
}

exports.signin = async (req, res, next) => {
    try {
        let { email, password } = req.body;

        // Check if user provide email & password
        if (!email || !password) throw new Error('Please provide a valid email and/or password');

        // Check if email exist and password is correct
        const user = await User.findAll({where: {email: email}})

        const confirmPassword = async (userPassword, DBPassword) => {
            return await bcrypt.compare(userPassword, DBPassword);
        }

        if(!user || !(confirmPassword(password, user.password))) throw new Error('Incorrect email or password');

        res.status(200).json({
            status: 'success'
        })

    } catch (err) {
        next(err);
    }
}

const loginValidate = joi.object({
    email: joi.string().email({minDomainSegments: 2, tlds: {allow: ['com']}}).required(),
    password: joi.string().min(8).required()
}).with('email', 'password');
