// require module syntax hh
require('dotenv').config()
const express = require('express')
//import express from "express"
const app = express()
const port = 4000
// res is response
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
  res.send("Welcome to twitter")
})
app.get('/login',(req,res)=>{
  res.send("<h1>please login at chai aur login </h1>")
})

app.get('/youtube',(req,res)=>{
  res.send("<h2>Chai aur code</h2>")
})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})


