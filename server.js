const { request } = require("express");

const express= require('require')
const app =  express()
const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config()
mongoose.connect()

app.listen(4000, ()=>
console.log('server up and running')
)