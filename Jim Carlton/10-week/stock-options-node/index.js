const express = require('express');
const ejs = require('underscore');
const _ = require('underscore');
const axios = require('axios');
const stockfinder = require('stockfinder');

const server = express();
server.set('view-engine', ejs);
server.use(express.static('public'));

const PORT = 6969;
const APIKEY = `pk_16a849fd637243a79fff90fa4d42bc5d`;

/////////////////////////////////////

server.get('/', (req, res) => {
  res.render('home.ejs');
});

server.get('/result', (req, res) => {
  stockfinder.getStock({ticker: 'AAPL', apiKey: APIKEY}).then((result) => {
    console.log(result);

  res.render('result.ejs', { symbol: req.query.symbol, price: result.iexRealtimePrice });
    });
});

server.listen(PORT,() => console.log(`Now serving on http://localhost:${ PORT }`));
