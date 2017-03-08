

const express = require('express');

const app = express();
app.set('port', (process.env.PORT || 5000));

// tell the app to look for static files in these directories

app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));


// start the server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000 or http://127.0.0.1:5000');
});

console.log("process.env :", process.env.NODE_ENV );
console.log("(process.env.NODE_ENV == production) :", (process.env.NODE_ENV == "production"));
