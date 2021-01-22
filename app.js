const http = require('http');
const express = require('express');

const app = express();
const routerHandle = express.Router();
//const hostname = "127.0.0.1";
const port = process.env.port || 3000;

routerHandle.route('/getRandomNumber/:id')
    .get((req, res) => {

        /* const response = {
            hello: 'Hey this it the response'
        };
        res.json(response); */
        let getRandom = getRandomNumber(req.params.id);
        res.send({ number: getRandom });
    });
routerHandle.route('/getRandomNumber')
    .get((req, res) => {
        let getRandom = getRandomNumber(2);
        res.send({ number: getRandom });
    });


app.use('/api', routerHandle);

app.get('/', (req, res) => {
    res.send('Hello Akshay!!!');
});

function getRandomNumber(k) {
    let randomNum = [];
    for (let i = 0; i < k; i++) {
        let random = Math.floor(Math.random() * 10000000000000);
        randomNum.push(random);
    }
    //console.log(randomNum);
    return randomNum;
}


app.listen(port, () => {
    console.log(`Running at ${port}`);
});

//npm run start

/* 
const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); */