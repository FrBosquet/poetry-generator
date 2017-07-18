const Word = require('../models/Word');

module.exports = {
  index: (req, res, next) => {
    res.render('word/index', { title:"Words"})

  },
  new: (req, res, next) => {
    console.log("Received request with data: ", req.body);
    let data = {
      content : req.body.content.toLowerCase(),
      type: req.body.type
    }
    console.log("Built query: ", data);

    Word.find(data, "content type")
        .exec()
        .then((foundWord)=>{
          console.log("Inside find: ", foundWord);

          console.log("La palabra encontrada es: ", foundWord);
          if(foundWord.length !== 0){
            res.send({msg: "La palabra ya existe en la base de datos"});
            return;
          }

          let newWord = new Word(data);

          newWord.save()
            .then(()=>res.send({msg: "Se salvo en la DB"}))
            .catch(()=>res.send({msg: "No se pudo salvar en la DB"}));
        })
        .catch(()=>{
          res.send({msg: "Ocurrio un error al acceder a la base de datos"});
        })
  }
}
