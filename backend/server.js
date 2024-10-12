const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
require('dotenv').config();
const db = require("./db");
const userRoute = require('./Routes/userRoutes')
const adminRoute = require('./Routes/adminRoutes')

const app = express();
app.use(bodyParser.json()); 
app.use(cors());


const PORT = process.env.PORT

// Routes
app.use('/user',userRoute)
app.use('/admin',adminRoute)

app.listen(PORT, () => {
    console.log("Listening on ",PORT);
  });