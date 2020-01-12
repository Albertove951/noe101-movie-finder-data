const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const key = require('./env')

const app = express();

app.use(morgan('dev'));
// When making calls to the OMDB API make sure to append the '&apikey=8730e0e' parameter

app.get('/?i=tt3896198', function (req, res) {
    return axios.get('')
})

module.exports = app;