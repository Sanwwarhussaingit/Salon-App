const mongoose = require('mongoose')
require('dotenv').config();

//define the mongo db cannection url
const  salonApp= process.env.MONGODBURL_LOCAL


//connect to the mongodb server and log connection statusx
mongoose.connect(salonApp,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
    // useFindAndModify: false
})


//get the default connection
const db = mongoose.connection;

//on connection event
db.on('connected', ()=>{
    console.log('Connected to MongoDB')
})

db.on('error', (err) => {
    console.log(`ERROR: Could not connect to MongoDB. ${err.message}`)
})

db.on('disconnected',()=>{ 
    console.log('MongoDB disconnected')
})
module.exports = db;
  