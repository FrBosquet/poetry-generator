const passport = require("passport");
const router = require('express').Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

function checkNameSignUp(req,res,next) {
  const name = req.body.name;
  User.findOne({
    name: name,
  }, "name", (err, user) =>{
    if (user !== null) {
      res.render("auth/signup", {
        message: "The name already exists, try again"
    });
  } else {
    next();
  }
  });
}

function checkEmailSignUp(req,res,next) {
  const email = req.body.email;
  User.findOne({
      email: email,
    }, "email", (err, user) => {
      if (user !== null) {
        res.render("auth/signup", {
          message: "The email already exists, try again"
        });
      } else {
        next();
      }
    });
}

router.post("/signup", checkNameSignUp, checkEmailSignUp, (req, res, next) => {
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;

  if (name === "" || password === "" || email === "") {
    res.render("auth/signup", {
      message: "You must fulfill all the fields!"
    });
    return;
  }
      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);

      const newUser = User({
        name: name,
        password: hashPass,
        email: email
      });
      newUser.save((err) => {
        if (err) {
          res.render("auth/signup", {
            message: "Something went wrong"
          });
        } else {
          res.redirect("/");
        }
    });
});

router.get("/login", (req, res, next) => {
  res.render("auth/login", { "message": req.flash("error") });
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/auth/login",
  failureFlash: true,
  passReqToCallback: true
}));

router.get("/profile", (req, res, next) => {
  res.render("auth/profile");
});

router.get("/logout", (req, res, next) => {
  req.logout();
  res.redirect('/');
})

router.get("/facebook", passport.authenticate("facebook"));
router.get("/facebook/callback", passport.authenticate("facebook", {
  successRedirect: '/',
  failureRedirect: '/'
}));

module.exports = router;
