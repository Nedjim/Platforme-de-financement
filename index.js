const express = require('express');
const app = express();

const config = require('./config.js');
// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));


// Home page
app.get('/', (req, res) => {
  res.send("Welcome to home page");
});

// Routes
const user = require('./server/routes/user');
app.use('/user', user);

// start the server
app.listen(config.port, () => {
  console.log('Server is running on http://localhost:3000 or ', config.port);
});
