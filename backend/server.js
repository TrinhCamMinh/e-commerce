const express = require('express');
const { use } = require('./routes/productRoute');
const app = express();
const productRoute = require('./routes/productRoute');
const userRoute = require('./routes/userRoute');
const historyRoute = require('./routes/historyRoute');

//middleware
app.use(express.json());

//routes
app.use('/api/product', productRoute);
app.use('/api/user', userRoute);
app.use('/api/history', historyRoute);

app.listen(4000, () => {
    console.log(`listening on PORT 4000...`);
});
