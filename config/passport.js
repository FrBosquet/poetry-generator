const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require('../models/User');
const dotenv = require ("dotenv").load();
const app = require('express')();

module.exports = function() {
  passport.serializeUser((user, cb) => {
    console.log('dos');
    cb(null, user.id);
  });

  passport.deserializeUser((id, cb) => {
    console.log('tres');
    User.findOne({
      "_id": id
    }, (err, user) => {
      if (err) {
        return cb(err);
      }
      cb(null, user);
    });
  });


  passport.use('local', new LocalStrategy((username, password, next) => {
    User.findOne({
      username: name
    }, (err, user) => {
      if (err) {
        return next(err);
      }

      if (!user) {
        return next(null, false, {
          message: "Incorrect username"
        });
      }

      if (!bcrypt.compareSync(password, user.password)) {
        return next(null, false, {
          message: "Incorrect password"
        });
      }
      console.log('uno');
      return next(null, user);
    });
  }));
  app.use(passport.initialize());
  app.use(passport.session());

};
