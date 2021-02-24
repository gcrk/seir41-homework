const express = require('express')
const ejs = require('ejs')
const yahooStockPrices = require('yahoo-stock-prices')

const server = express();
server.set('view-engine', ejs)

const PORT = 1313;

server.get('/search', (req, res) => {
  res.render('search.ejs')
})

server.get('/result', (req, res) => {
  yahooStockPrices.getCurrentPrice(req.query.stock).then((price) => {
    res.render('result.js', {stock:req.query.stock, price:price})
  });
})

server.listen(PORT)
