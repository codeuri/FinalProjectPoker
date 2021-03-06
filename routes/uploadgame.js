let verifyToken = require ('../index');
var jwt = require('jsonwebtoken');
var socketioJwt = require('socketio-jwt');



var express = require('express');
var router = express.Router();
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var jsonParser = bodyParser.json();

let url = 'mongodb://admin:123@ds129706.mlab.com:29706/poker';
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird');

mongoose.connect(url, { useMongoClient: true });
const db = mongoose.connection;
const Game = require('../models/game');

router.post('/', verifyToken, (req, res, next) => {
	console.log(req.body, verifyToken);
	let ownerEmail = JSON.parse(req.body.email);
	Game.find({'owner.email': ownerEmail}, (err, game) => {
		// console.log('games', game)
        res.send(game);
  	})
})

module.exports = router;