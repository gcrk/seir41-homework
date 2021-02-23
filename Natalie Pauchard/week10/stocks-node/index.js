const express = require('express');
const stockfinder = require('stockfinder');

const PORT = 1337;
const APIKEY = 'pk_16a849fd637243a79fff90fa4d42bc5d';

const server = express();

server.get('/', (req, res) => {
  res.render('home.ejs');
});

server.get('/info', (req, res) => {
  // look up stock price
  // const sf = new StockFinder('stable', 'AAPL', APIKEY, false); // see the docs - whatever works is fine
  stockfinder.getStock({ticker: req.query.symbol, apiKey: APIKEY}).then((result) => {
    //find stock price then render - inside this function is where we will have access to the stock price.
      res.render('info.ejs', {price: result.iexRealtimePrice, symbol: req.query.symbol}); // pass price down to the view
    console.log(result);
  })
  // res.render('info.ejs'); // pass price down to the view
});

server.listen(PORT, () => console.log(`Listening on http ${ PORT }`));
