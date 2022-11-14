require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productRoute = require('./routes/productRoute');
const userRoute = require('./routes/userRoute');
const historyRoute = require('./routes/historyRoute');

//middleware
app.use(express.json());

//routes
app.use('/api/product', productRoute);
app.use('/api/user', userRoute);
app.use('/api/history', historyRoute);

//connect to database and start server
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`connected to database`);
            console.log(`listening on PORT ${process.env.PORT}...`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
