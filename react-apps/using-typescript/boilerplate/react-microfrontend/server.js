const express = require('express');
const path = require('path');
const app = express();
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
  return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});
app.listen(5000);
console.log('Server Started at port: 5000. Use [CTRL + C] to stop');
