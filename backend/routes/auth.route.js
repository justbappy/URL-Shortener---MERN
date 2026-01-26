// internal imports
const authRouter = require('express').Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

// external imports
const auth_model = require('../models/auth.model');
const { protect } = require('../controllers/auth.controller');

// hashing password
async function hashPassword(password, salt){
    const hash_password = await bcrypt.hash(password, salt);
    return hash_password;
}

// comparing password
async function comparePassword(password, hash_password){
    const compare_password = await bcrypt.compare(hash_password, password);
    return compare_password;
}

// creating auth token
async function generateAuthToken(user){
    // create payload
    const payload = {
        user: {
            _id: user._id
        }
    }

    // sign and return token
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: "48h"
    });
    return token;
}

// @route REGISTER auth/register
// @desc Register a new user
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

    const token = await generateAuthToken(new_user);
    await new_user.addAuthToken(token);
    new_user.save();

    res.cookie("token", token, {
        expires: new Date(Date.now() + 172800000),
        httpOnly: true
    });

    return res.status(201).json({
        message: "Registered Successfully",
        user: {
            _id: new_user._id,
            name: new_user.name,
            email: new_user.email
        },
        token
    })

});

// @route LOGIN auth/login
// @desc Authenticate user
// @access public
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

    const token = await generateAuthToken(user);
    await user.addAuthToken(token);

    // res.cookie("token", token, {
    //     expires: new Date(Date.now() + 172800000),
    //     httpOnly: true
    // });

    // create payload
    const payload = {
        user: {
            id: user._id,
        }
    }

    // sign and return the token along with user data
    jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: "48h"
    }, (err, token) => {
        if(err) throw err

        // send user and token in response
        return res.json({
            message: "User logged in",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            },
            token
        })
    });

});

// @route PROFILE auth/user/:id
// @desc Get logged in user's profile (protected route)
// @access private
authRouter.get("/profile", protect, (req, res) => {
    res.json(req.user);
})

module.exports = authRouter;