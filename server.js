'use strict';

const express = require('express');
const app = express();
const _ = require('lodash');

app.use('/js', express.static(`${__dirname}/js`));

_(['short', 'medium', 'long']).forEach(length =>
  app.get(`/${length}`, (req, res) => {
    res.sendFile(`/pages/frame-${length}.html`, {root: __dirname});
  })
);

app.listen(process.env.PORT || 5000);
console.log('running...');
