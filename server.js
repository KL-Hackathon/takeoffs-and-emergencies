// Dependencies
const express = require('express');

const app = require('express')();
const io = require('socket.io');

const port = process.env.PORT || 8080;

app.use(express.static('public'));

app.listen(port, function () {
	console.log('listening on PORT:' + port);
});
