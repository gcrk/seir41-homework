const express = require('express');
const ejs = require('ejs');
const axios = require('axios');
const stock = require('stocks.js')

const server = express();
server.set('view-engine', ejs);
server.use(express.static('public'));

// let stocks = new Stocks('NUZEB0KOT8QCMACA');

const PORT = 1337;

server.get('/', (req, res) => {
  res.render('home.ejs')
})
// var result = await stocks.timeSeries(options);
//
// var options = {
//   symbol: 'TSLA',
//   interval: 'daily',
//   start: new Date('2017-07-01'),
//   end: new Date('2017-07-09')
// }

server.get('/result', (req, res) => {
  res.render('result.ejs', {symbol: req.query.symbol})
})

server.listen(PORT, () => console.log(`Now serving on http://localhost:${PORT}`));
