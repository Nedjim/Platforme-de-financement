const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');
const morgan = require('morgan');
const app = express();


// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// logs all requests
app.use(morgan('dev'));

const config = require('./config.js');
// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

// config access handle cors request
app.use(function(req, res, next){
	res.setHeader('Access-Control-Allow-Origin', '*'); // give all access
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST'); // accept methods
	res.setHeader('Access-Control-Allow-Headers', 'X-requested-With, content-type, Authorization'); // accept XML
	next();
});

// Routes
const user = require('./server/routes/user');
app.use('/users',user);

const pro = require('./server/routes/project');
app.use('/project',pro);

const login = require('./server/routes/login');
app.use('/login',login);

const signup = require('./server/routes/signup');
app.use('/signup',signup);
//----------------------------------------test

    


// start the server
app.listen(config.port, () => {
  console.log('Server is running on http://localhost:3000 or ', config.port);
});
