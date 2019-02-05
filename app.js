const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log("url:     ", req.url);
  console.log("headers: ", req.headers);
  next();
});

const getHello = function(req, res) {
  res.send("Hello, How are you?");
}

app.get('/hello', getHello);

module.exports = app;
