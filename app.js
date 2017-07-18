const app = require('express')();
const passport = require('passport');

require('dotenv').load();
require('./config/passport')(passport);
require('./config/express')(app);

const index = require('./routes/index');
const verse = require('./routes/verse');
const auth = require('./routes/auth');
const word = require('./routes/word');

app.use('/', index)
app.use('/verse', verse)
// app.use('/auth', auth)
app.use('/word', word)

require('./config/error-handler')(app);
module.exports = app;
