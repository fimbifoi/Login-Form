var express = require ('express');
var router = express.Router();
var User = require('user');

router.get('/', function (req, res, next) {
	res.render('index', {title: 'Express'});
});


router.post('', function(req, res){
	var username = req.body.username;
	var password = req.body.password;

	User.findOne({username: username, password: password}, function(err, user){
		if(err) {
			console.log(err);
			return res.status(500).send();
		}

		if(!user) {
			return res.status (404).send();
		}

		return res.status(200).send();
	})
});

