/**
 ** Name: server.js
 ** Date：2018/9/10 17:28
 ** Author: yeungtg
 ** Description:
 **/

const express = require('express');
const fs = require('fs');
const path = require('path');
const proxyMiddleware = require('http-proxy-middleware');
const resolve = file => path.resolve(__dirname, file);

const app = express();
app.set('port', (process.env.port || '8000'));

// app.use(express.static(path.join(__dirname, 'dist/static')));
app.use('/', express.static('dist/'));

app.get('/', (req, res) => {
  const html = fs.readFileSync(resolve('./dist/index.html'), 'utf-8');
  res.send(html);
});
const proxyTable = {
  
};

Object.keys(proxyTable).forEach(function (context) {
  let options = proxyTable[context];
  if (typeof options === 'string') {
    options = { target: options };
  }
  app.use(proxyMiddleware(options.filter || context, options));
});

app.listen(app.get('port'), () => {
  console.log(`open browser and type http://localhost:${app.get('port')}`);
});
