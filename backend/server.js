const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
require('dotenv').config();


const app = express();
app.use(bodyParser.json());
app.use(cors());


const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("Listening on ",PORT);
  });