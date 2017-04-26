const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const db = require('./api/db/pg');

const app = express();
// const _port = process.argv[2] || process.env.PORT || 8080;

const dotenv = require('dotenv');
dotenv.load();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(logger('dev'));

const searchRoute = require('./api/routes/search');

app.use('/search', searchRoute)

app.use(express.static(path.resolve(__dirname, 'app')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'app/index.html'))
})

app.set('port', 8080);

app.listen(app.get('port'), function() {
  console.log('Node App Started')
})




// app.listen(_port, () => {
//   console.log('Serving running on ' +_port);
// });
