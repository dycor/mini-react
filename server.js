var express = require('express');
var app = express();
var morgan = require('morgan');

const port = 777;

app.use(morgan('dev'));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/src/pages/index.html');
});

app.listen(port, function(){
  console.log('Listening on port '+port);
});