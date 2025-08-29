// require module syntax hh
require('dotenv').config()
const express = require('express')
//import express from "express"
const app = express()
const githubdata=
{
  "name": "Khushi",
  "age": 21,
  "isStudent": true,
  "skills": ["C++", "Python", "React", "Django"],
  "projects": [
    {
      "title": "Car Booking Website",
      "techStack": ["Django", "HTML", "CSS", "JavaScript"]
    },
    {
      "title": "Mood Tracker AI",
      "techStack": ["Python", "Machine Learning"]
    }
  ]
}

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
app.get('/github',(req,res)=>{
  res.json(githubdata)
})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})


