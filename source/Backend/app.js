const express = require('express');
const bodyParser = require('body-parser'); 
const mongoose=require('mongoose');
const stuffRoutes =require('./routes/stuff');

const app = express();
mongoose.connect('mongodb+srv://abrar:E9c8Zp8ffiqEkTL1@cluster0.eohysfv.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log('sucessfully connected to MongoDB');
})
.catch((error)=>{
    console.log("error unable to connect to MongoDb");
})
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.use('/api/stuff',stuffRoutes);
module.exports = app;