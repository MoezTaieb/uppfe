const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var cookieParser = require('cookie-parser');
require('./config/passportConfig');
const passport = require('passport');
const { mongoose } = require('./db.js');

//var userController = require('./controllers/userController.js');
const routes = require('./routes/contractRoutes')
var app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());

app.listen(3100, () => console.log('Server started at port : 3100'));


//app.use('/users', userController);
app.use('/api',routes)
