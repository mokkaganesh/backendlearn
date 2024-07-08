// import express from 'express'
const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/names', (req, res) => {
    res.send('Hello Names!')
})

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>')
}
)
app.get('/login',(req,res)=>{
    res.send('<h1>Login Page</h1>')
})

app.get('/names/:name', (req, res) => {
    res.send(`Hello ${req.params.name}!`)
    //how to pass the name in localhost
    //localhost:3000/names/John
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})