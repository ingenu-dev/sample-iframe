'use strict';

const express = require('express');
const app = express();
const _ = require('lodash');

app.use('/public', express.static(`${__dirname}/public`));

_(['short', 'medium', 'long']).forEach(length =>
  app.get(`/${length}`, (req, res) => {
    setTimeout(() =>
      res.sendFile(`/pages/frame-${length}.html`, {root: __dirname})
        , req.query && req.query.timeout ? req.query.timeout : 0)
  })
);

app.get('/invoices', (req, res) => {
  console.log(req.params.period);
  setTimeout(() =>
    res.sendFile(`/pages/frame-invoices.html`, {root: __dirname})
      , req.query && req.query.timeout ? req.query.timeout : 0);
});

app.listen(process.env.PORT || 5000);
console.log('running...');
