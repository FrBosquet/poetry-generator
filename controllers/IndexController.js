module.exports = {
  index: (req, res, next) => {
    console.log(req.user);
    res.render('index', {title: "Poetry generator"})
  }
}
