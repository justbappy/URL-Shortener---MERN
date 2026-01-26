const mongoose = require('mongoose');

const auth_schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    tokens: [{
        token: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now()
        }
    }]
});

auth_schema.methods.addAuthToken = async function(token,next){
    try{
        this.tokens = this.tokens.concat({token});
        await this.save();
    }catch(err){
        console.log(err);
    }
}

const auth_model = mongoose.model("User", auth_schema);

module.exports = auth_model;