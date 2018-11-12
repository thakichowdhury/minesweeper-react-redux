const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// Setup body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve up static files
app.use('/', express.static(path.join(__dirname, '../public')));

module.exports = app;
