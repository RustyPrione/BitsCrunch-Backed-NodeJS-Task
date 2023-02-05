const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const routers= require("./routers")
app.use(routers);


app.listen(process.env.PORT, (err) => {
  console.log("Nodejs is running in PORT", process.env.PORT);
});