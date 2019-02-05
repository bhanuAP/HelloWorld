const http = require('http');
const PORT = 3000;
const app = require('./app.js');

const server = http.createServer(app);
server.listen(PORT);
console.log(`Listening on PORT ${PORT}`);
