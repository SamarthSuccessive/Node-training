const express = require("express");
const StudentRouter=require('./routes/studentRouter');
const helmet = require("helmet");
const app = express();

const server = () => {
  app.use(express.json());
  app.use(helmet());
  app.use(StudentRouter);
  return app;
};

module.exports = server;