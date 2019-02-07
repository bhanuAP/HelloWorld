const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log("url:     ", req.url);
  console.log("headers: ", req.headers);
  next();
});

app.get('/', (req, res) => {
  res.send("Hello");
});

module.exports = app;
