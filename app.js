const express = require('express');
const randomListRouter = require('./routes/randomListRouter')();

const app = express();
const port = process.env.port || 3000;


app.use('/api', randomListRouter);
app.get('/', (req, res) => {
    res.send('Hi tongadive! Lets generate Random Numbers....');
});

app.listen(port, () => {
    console.log(`Running at ${port}`);
});
