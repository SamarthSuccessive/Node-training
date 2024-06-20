const express = require("express");
const app = express();
const dotenv = require("dotenv");
const router = require("./routes/routes");
const swaggerSpec = require("./docs/swaggerConfig");
const swaggerUi = require("swagger-ui-express");

require("./Config/db");
dotenv.config();
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credential: true,
};

const server = () => {
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.use("/v1", router);
  return app;
};

module.exports = server;
