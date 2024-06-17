const serverSetup = require("./server");
const logger = require("./utils/logger"); // Assuming logger.js is in the same directory
const PORT = process.env.PORT || 4001;

serverSetup().listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
  logger.info(`Server started at PORT ${PORT}`);
});
