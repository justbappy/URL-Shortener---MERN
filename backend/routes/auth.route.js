// internal imports
const authRouter = require('express').Router();
const bcrypt = require("bcryptjs");

// external imports
const auth_model = require('../models/auth.model');

async function hashPassword(password, salt){
    const hash_password = await bcrypt.hash(password, salt);
    return hash_password;
}

async function comparePassword(password, hash_password){
    const compare_password = await bcrypt.compare(hash_password, password);
    return compare_password;
}

authRouter.route("/register").post(async (req, res) => {
    const {name, email, password} = req.body;
    const user = await auth_model.findOne({email});

    if(user){
        return res.json({
            message: "Email Already Exists, Please login"
        })
    }

    const salt = 10;
    const hash_password = await hashPassword(password, salt);

    const new_user = await auth_model.insertOne({
        name,
        email,
        password: hash_password,
    });

    return res.status(201).json({
        message: "New user has been created",
        user: {
            name,
            email,
        }
    })
});

authRouter.route("/login").post(async (req, res) => {
    const {email, password} = req.body;

    const user = await auth_model.findOne({email});
    
    if(!user){
        return res.json({
            message: "user or email is incorrect"
        });
    }
    
    const compare_password = comparePassword(password, user.password);
    if(!compare_password){
        return res.json({
            message: "email or password is incorrect"
        });
    }

    return res.json({
        message: "user logged in",
        user: {
            name: user.name,
            email
        }
    })

})

module.exports = authRouter;