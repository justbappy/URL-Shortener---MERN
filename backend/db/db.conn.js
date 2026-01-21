const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONNECTION_URI).then(() => {
    console.log("DB Connection successful");
}).catch((err) => {
    console.log("DB Connection Failed");
    console.log(err);
});