const express = require('express');
const app = express();
const easterEgg = require('./easter-egg-middleware');

app.use(express.static('public'));

app.use(easterEgg);

app.use((req, res) => {
  res.statusCode = 404;
  res.send(`<h1>404 Not Found!</h1>`);
})

app.listen(8080);
