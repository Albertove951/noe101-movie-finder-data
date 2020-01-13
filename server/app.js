const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

const cache = {};

app.use(morgan('dev'));
// When making calls to the OMDB API make sure to append the '&apikey=8730e0e' parameter
app.get(`/`, function (req, res) {
    return axios.get('http://www.omdbapi.com/?apikey=773f1445&/?i=tt3896198')
        .then(function (res) {
            console.log(res)
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
        })
})

module.exports = app;