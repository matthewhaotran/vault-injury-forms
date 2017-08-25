//Requires
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const morgan = require('morgan');


const app = express();

//Connect MongoDB Database
var mongodbUri = 'mongodb://matthewhaotran:OCA54321@ds149258.mlab.com:49258/vaultir';
mongoose.connect(mongodbUri, { useMongoClient: true });
mongoose.Promise = require('bluebird');


//Middleware
app.use(morgan('dev'));
app.use(express.static(path.resolve('dist')));
app.use(bodyParser.json());
// required for passport
app.use(passport.initialize());

//pass passport for configuration
require('./config/passport')(passport); 

//Route to default index
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname + '/dist/' })
});

//Custom Routes
app.use('/api', require('./routes')(passport));


module.exports = app;