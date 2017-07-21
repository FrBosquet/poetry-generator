const Word = require('../models/Word');

module.exports = {
  index: (req, res, next) => {
    res.render('word/index', {
      title: "Palabras"
    });
  },
  new: (req, res, next) => {
    console.log("Received request with data: ", req.body);
    console.log("User is ", req.user);

    let data = {
      content: req.body.content.toLowerCase(),
      type: req.body.type,
      user_id: req.user._id
    };
    console.log("Built query: ", data);

    Word.find(data, "content type")
      .exec()
      .then((foundWord) => {
        console.log("Inside find: ", foundWord);

        console.log("La palabra encontrada es: ", foundWord);
        if (foundWord.length !== 0) {
          res.send({
            msg: "La palabra ya existe"
          });
          return;
        }

        let newWord = new Word(data);

        newWord.save()
          .then(() => res.send({
            msg: "Palabra guardada"
          }))
          .catch(() => res.send({
            msg: "No se pudo guardar tu palabra, inténtalo otra vez."
          }));
      })
      .catch(() => {
        res.send({
          msg: "Ocurrio un error al guardar tu palabra, inténtalo otra vez."
        });
      });
  },
  listAll: (req, res, next) => {
    const userId = req.user._id;
    Word.find({
      user_id: userId
    }, ((err, docs) => {
      if (err) {
        console.log("error en listAll words");
      } else {
        res.render('word/list', {
          list: docs
        });
      }
    }));
  },
  listOne: (req, res, next) => {
    const wordId = req.params.id;
    Word.findById(wordId, (err, doc) => {
      if (err) {
        console.log("error en findById word");
      } else {
        res.render('word/list', {
          list: doc
        });
      }
    });
  },
  delete: (req, res, next) => {
    const wordId = req.params.id;
    console.log("intentando borrar", wordId);
    Word.findByIdAndRemove(wordId, (err, doc) => {
      if (err) {
        console.log("error en delete word");
        res.send('error en delete word')
        return;
      }
      res.send('palabra borrada correctamente');

    });
  },
  findUserWords: (req, res, next) => {
    const userId = req.params.id;
    Word.find({
      user_id: userId
    }, function(err, docs) {
      if (err) {
        console.log("error en find user words");
      } else {
        res.render('word/list', {
          list: docs
        });
      }
    });
  },
  findTypeOfWords: (req, res, next) => {
      const wordType = req.params.type;
      Word.find({
        type: wordType
      }, function(err, docs) {
        if (err) {
          console.log("error en find type of words");
        } else {
          res.render('word/list', {
            list: docs
          });
        }
      });
    },
};
