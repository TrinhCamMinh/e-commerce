const express = require('express');
const app = express();

//middleware
app.use(express.json());

app.listen(4000, () => {
    console.log(`listening on PORT 3000...`);
});
