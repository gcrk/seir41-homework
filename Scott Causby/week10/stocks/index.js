const express = require('express');
const stockfinder = require('stockfinder');

const PORT = 2222;
const APIKEY = 'pk_16a849fd637243a79fff90fa4d42bc5d';

const server = express();

server.get('/', (req, res) => {
    res.render('home.ejs');
});

server.get('/info', (req, res) => {
    stockfinder.getStock({ticker: req.query.symbol, apiKey: APIKEY}).then((result) => {
    res.render('info.ejs', {price: result.iexRealtimePrice, symbol: req.query.symbol});
    })
});

server.listen(PORT, () => console.log(`Listening on http://localhost:${ PORT }`));