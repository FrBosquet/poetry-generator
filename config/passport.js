const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require('../models/User');
const dotenv = require ("dotenv").load();

module.exports = function( app ) {

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
    console.log("Buscando usuario", username);

    User.findOne({name: username})
      .exec()
      .then( user =>{
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

        return next(null, user);
      })
      .catch(err=> next(err))
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  app.use((req, res, next)=>{
    res.locals.user = req.user;
    next();
  })
};
