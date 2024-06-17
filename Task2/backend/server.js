const express = require("express");
const app = express();
const dotenv = require("dotenv");
const router=require('./routes/routes');
require("./Config/db");
dotenv.config();
const cors=require('cors');
const corsOptions={
  origin:'*',
  credential:true
}

const server = () => {
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use('/v1',router);
 return app;
};

module.exports = server;