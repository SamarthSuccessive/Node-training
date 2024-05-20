const express = require("express");
const userRouter = require("./router/userRouter");
const bodyParser = require('body-parser');
const app = express();

const server = () => {
    app.use(express.json());
    app.use(bodyParser.json());
    app.use(userRouter);
    return app;
}

module.exports = server;