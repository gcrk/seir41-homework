const express = require('express');
const server = express();
const PORT = 3001;
const ejs = require('ejs');
const yahooStockPrices = require('yahoo-stock-prices');

server.set('view-engine', ejs);
server.use(express.static('public'));

server.get('/', (req, res) => {
  res.render('search.ejs');
});

server.get('/result', async (req, res) => {
  console.log(req.query.stock);
  try {
    const price = await yahooStockPrices.getCurrentData(req.query.stock);
    res.render('result.ejs', {
      query: req.query.stock,
      stonks: price.price,
      currency: price.currency,
    });
  } catch (error) {
    console.log(error);
    res.render('search.ejs', { error: error });
  }
});

server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
