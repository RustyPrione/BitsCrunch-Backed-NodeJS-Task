const loggerUtils = require("../utilities/logger")
const db = require('./connectDB');

db.close();
loggerUtils.info("DB Disconnected")