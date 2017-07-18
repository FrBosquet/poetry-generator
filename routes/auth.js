const router = require('express').Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", (req, res, next) => {
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;

  if (name === "" || password === "" || email === "") {
    res.render("auth/signup", {
      message: "You must fulfill all the fields!"
    });
    return;
  }

  User.find({
    name: name,
  }, "name", (err, user) => {
    if (user.name !== null) {
      res.render("auth/signup", {
        message: "The name already exists, try again"
      });
      return;
    }
  });

  User.find({
    email: email,
  }, "email", (err, user) => {
    if (user.name !== null) {
      res.render("auth/signup", {
        message: "The email already exists, try again"
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
});


module.exports = router;
