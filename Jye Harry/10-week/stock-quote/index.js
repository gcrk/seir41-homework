const express = require('express');
const yahoo = require('yahoo-finance');
const ejs = require('ejs');

const server = express();
server.set('view-engine', ejs);
server.use(express.static('public'));

const PORT = 1337;

server.get('/', (req, res) => {
  res.render('home.ejs');
});

server.get('/stock', (req, res) => {
  console.log(req.query.stock);
  yahoo.quote({
    symbol: req.query.stock,
  }, function(error, quote) {
    if (error) {
      console.log(error);
    }
    console.log(quote);
    res.render('stock.ejs', {
      symbol: quote.price.symbol,
      price: punctuate(quote.price.regularMarketPrice),
      name: quote.price.shortName,
      cap: punctuate(quote.price.marketCap),
      currency: quote.price.currency,
      percentChange: percentSign(plusSign((quote.price.regularMarketChangePercent * 100).toFixed(2))),
      dollarChange: plusSign(quote.price.regularMarketChange.toFixed(2))
    });
  })
})

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

const punctuate = function(value) {
  return value.toLocaleString(undefined, {minimumFractionDigits: 2});
}

const percentSign = function(value) {
  return `${value}%`;
}

const plusSign = function(value) {
  if (value >= 0) return `+${value}`;
  return value
}
