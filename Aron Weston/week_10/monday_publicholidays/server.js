const express = require('express');
const server = express();
const PORT = 3001;
const axios = require('axios');

server.get('/', (req, res) => {
  res.render('publicHolidays.ejs');
});

server.get('/results', (req, res) => {
  axios
    .get(
      `https://date.nager.at/api/v2/publicholidays/${req.query.year}/${req.query.country}`
    )
    .then((response, error) => {
      console.log(response.data);
      if (error) return console.error(error);
      res.render('results.ejs', { data: response.data });
    })
    .catch((err) => console.error(err));
});

server.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
