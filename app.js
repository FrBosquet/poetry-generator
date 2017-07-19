const session       = require("express-session");
const app = require('express')();
const passport = require('passport');
const LocalStrategy = require("passport-local").Strategy;
const bcrypt        = require("bcrypt");
const User = require('./models/User');
const ensureLogin = require("connect-ensure-login");

require('dotenv').load();
require('./config/express')(app);
require('./config/passport')(app);

const index = require('./routes/index');
const verse = require('./routes/verse');
const auth = require('./routes/auth');
const word = require('./routes/word');

app.use('/', index);
app.use('/verse', ensureLogin.ensureLoggedIn('/auth/login'), verse);
app.use('/auth', auth);
app.use('/words', ensureLogin.ensureLoggedIn('/auth/login'), word);

require('./config/error-handler')(app);
module.exports = app;
