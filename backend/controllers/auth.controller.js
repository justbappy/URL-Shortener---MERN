const jwt = require('jsonwebtoken');
const auth_model = require('../models/auth.model.js');

// middleware to protect routes
const protect = async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
            header_token = req.headers.authorization.split(" ")[1];
            cookie_token = req.cookies.token
            console.log(header_token);
            console.log(cookie_token);
            if(header_token === cookie_token){
                token = header_token;
            }else{
                return res.status(401).json({
                    message: "Not Authorized, Token Failed!"
                })
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            console.log(decoded);

            req.user = await auth_model.findById(decoded.user._id).select("-password");
            next();
        }catch(err){
            console.log("Token verification failed: " + err);
            res.status(401).json({
                message: "Not Authorized, Token Failed!"
            });
        }
    }else{
        res.status(401).json({
            message: "Not Authorized, No Token Provided!"
        })
    }
}

module.exports = {
    protect,
}