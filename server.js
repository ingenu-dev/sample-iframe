var express = require('express');
var app = express();

app.get('/*', function(req, res){
  res.sendFile('index.html', {root: __dirname});
});

app.listen(process.env.PORT || 5000);
console.log('running...');
