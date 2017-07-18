const session       = require("express-session");
const app = require('express')();
const passport = require('passport');
const LocalStrategy = require("passport-local").Strategy;
const bcrypt        = require("bcrypt");
const User = require('./models/User');


require('dotenv').load();
require('./config/express')(app);

const index = require('./routes/index');
const verse = require('./routes/verse');
const auth = require('./routes/auth');

app.use('/', index);
app.use('/verse', verse);
app.use('/auth', auth);

app.use(session({
  secret: "our-passport-local-strategy-app",
  resave: true,
  saveUninitialized: true
}));


require('./passport/local');



app.use(passport.initialize());
app.use(passport.session());

require('./config/error-handler')(app);
module.exports = app;
