const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');
const morgan = require('morgan');
const passport = require('passport');
const app = express();
const config = require('./config.js');

// connect to the database and load models

//Pira, essai de debloquer  la ligne 13 et tu  verras qu'il ya une erreur. Tu vas mieux la comprendre, je te laisse la resoudre.
mongoose.connect(config.dbUrl);
//require('./server/models').connect(config.dbUrl);

// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// logs all requests
app.use(morgan('dev'));

// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);


// Routes

const authRoutes = require('./server/routes/auth');
app.use('/auth', authRoutes);

const apiRoutes = require('./server/routes/api');
app.use('/api', apiRoutes);

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
