const express = require('express');
const app = express();

// Port auto or 3000
const port = process.env.PORT || 3000;

// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

// Home page
app.get('/', (req, res) => {
  res.send("Welcome to home page");
});

// start the server
app.listen(port, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});
