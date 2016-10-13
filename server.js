'use strict';

const express = require('express');
const app = express();
const _ = require('lodash');

app.use('/public', express.static(`${__dirname}/public`));

_(['short', 'medium', 'long', 'invoices', 'device-records']).forEach(page =>
  app.get(`/${page}`, (req, res) => {
    setTimeout(() =>
      res.sendFile(`/pages/frame-${page}.html`, {root: __dirname})
        , req.query && req.query.timeout ? req.query.timeout : 0)
  })
);

app.listen(process.env.PORT || 5000);
console.log('running...');
