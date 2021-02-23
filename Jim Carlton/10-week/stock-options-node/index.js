const express = require('express');
const ejs = require('underscore');
const _ = require('underscore');
const axios = require('axios');
const stocks = require('yahoo-stock-prices');

const server = express();
server.set('view-engine', ejs);
server.use(express.static('public'));

const PORT = 6969;

/////////////////////////////////////

server.get('/', (req, res) => {
  res.render('home.ejs');
});

server.get('/result', (req, res) => {
  const getPrice = await yahooStockPrices.getCurrentPrice('TSLA');
  res.render('result.ejs', { stock: req.query.stock, price: getPrice });
});

server.listen(PORT,() => console.log(`Now serving on http://localhost:${ PORT }`));
