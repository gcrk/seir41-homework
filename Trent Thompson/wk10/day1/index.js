const express = require('express')
const ejs = require('ejs')
const _ = require('underscore')
const axios = require('axios')

const server = express()
server.set('view-engine', ejs)

const PORT = 1337

server.get('/', (req, res) => {
  console.log('get/')
  //res.send('welcome to the home page')
  res.render('home.ejs')
})

server.get('/trivia', (req, res) => {
  axios.get('http://numbersapi.com/random/trivia').then((response) => {
    res.render('trivia.ejs', {trivia: response.data})
  })
})

server.get('/iss', (req,res) => {
  axios.get('http://api.open-notify.org/iss-now.json').then((response) => {
    const dataLat = response.data.iss_position.latitude
    const dataLon = response.data.iss_position.longitude
    res.render('iss.ejs', {issLat: dataLat, issLon: dataLon})//instance variable.the key is what u pass down to iss.ejs
    //setInterval(server.get, 3000)                           //and the value comes from a variable, which has data rom API

  })
})

// server.get('/iss', (req, res) => {
//   axios.get('http://api.open-notify.org/astros.json').then((response) => {
//     console.log(response)
//     res.render('iss.ejs',{issPeople: response.data})
//   })
// })

server.listen(PORT, () => {
  console.log('server listening on port' + PORT)
})
