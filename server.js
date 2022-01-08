//import fetch from 'node-fetch';
//import express from 'express'
const express = require('express')
const app = express()
const portExpress = 80
//import path from 'path'
//const path = require('path')

app.use(express.static('public'))
// app.get('/', (req, res) => {
// res.sendFile(path.join(__dirname, '/public/index.html'));
// })

app.listen(portExpress, () => {
  console.log(`Example app listening at http://localhost:${portExpress}`)
  
})
// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8080;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});