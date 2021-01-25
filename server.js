var express = require("express");
var path = require('path');
var app = express();
var port = 8000;
app.use(express.static('site/html'));
app.use('/server/vital', express.static(path.join(__dirname, 'vital/public')))
app.use(function(req, res, next) {
  res.status(404);
  res.sendFile(path.join(__dirname, 'vital', '404.html'));
});


app.listen(port);
console.log(`Now listening on port ${port}`);
console.log(`Go to http://localhost:${port}`);