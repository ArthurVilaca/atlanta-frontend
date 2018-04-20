const express = require('express');
const path = require('path');
const axios = require('axios');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

let app = express();
app.use(express.static(__dirname + '/build'));

app.route('/').get(function(req, res) {
	res.sendFile('/build/index.html');
});

app.post('/*', function(req, res) {
    axios.post('http://165.227.71.216' + req.url, req.body)
        .then((data) => {
            res.send(data.data)
        })
});

app.get('/*', function(req, res) {
    axios.get('http://165.227.71.216' + req.url)
        .then((data) => {
            res.send(data.data)
        })
});

app.put('/*', function(req, res) {
    axios.put('http://165.227.71.216' + req.url)
        .then((data) => {
            res.send(data.data)
        })
});

app.listen(3000, function() {
    console.log('listening on *:'+3000);
});

module.exports = app;