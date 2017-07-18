const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config');
const session = require('express-session');
const flash = require('connect-flash');
const MongoStore = require('connect-mongo')(session);

module.exports = function(app){

  mongoose.connect(config.db);

  app.set('views', config.rootPath+'views');
  app.set('view engine', 'jade');
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(config.rootPath+'public'));
  app.use(session({
    secret: "our-passport-local-strategy-app",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore( {
      mongooseConnection: mongoose.connection,
      ttl: 24*3600
    })
  }));
  app.use(flash());
};
