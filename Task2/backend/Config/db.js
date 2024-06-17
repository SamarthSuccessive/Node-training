const mongoose = require("mongoose");
const dotenv = require("dotenv");
const logger = require("../utils/logger"); 

dotenv.config();
const conn = mongoose
  .connect('mongodb://localhost:27017/Task2')
  .then(() => {
    logger.info("MongoDB is connected");
    console.log("MongoDB is connected");

  })
  .catch((err) => {
    logger.error("MongoDB connection error", err);
  });

module.exports = conn;
