const googleTTS = require('google-tts-api');
const http = require('https');
const fs = require('fs');
const uniqueFilename = require('unique-filename');
const Word = require('../models/Word');
const Verse = require('../models/Verse');
const VerseComposer = require('./VerseComposer');

function verseToFile( verse ){
    return new Promise( (resolve,reject) => {
      googleTTS( verse , 'es', 1.2)
        .then(function (url) {
          var filename = uniqueFilename("public/verses");
          var file = fs.createWriteStream(filename+'.mp3');

          var request = http.get(url, function(response) {
            response.pipe(file)
              .on('finish', ()=>{

                resolve(filename.replace('public/', '') + '.mp3');
              })
          })
      })
  })
}

module.exports = {
  index: (req, res, next) => {
    var who, adj, what, how, where, when;
    Word.find().exec()
      .then( words => {
        VerseComposer(words).then((newVerse)=>{
          verseToFile(newVerse)
          .then( fileName => {
            return res.render('verse/index', {
              type: 'new',
              title:"Verso aleatorio",
              verse: newVerse,
              file: fileName
            })});
        })
      })
      .catch(function (err) {
        console.error(err.stack);
        next(err);
        }
    )
  },
  list: (req, res, next)=>{
    console.log('tres');
    const userId = req.user._id;
    Verse.find({
      user_id: userId
    }, ((err, docs) => {
      if (err) {
        console.log("error en list verse");
        next(err);
      } else {
        res.render('verse/list', {
          list: docs
        });
      }
    }));
  },
  save: (req, res, next)=>{
    console.log(req.body);
    let { content } = req.body;
    let user_id = req.user._id;

    Verse.find({user_id, content})
      .exec()
      .then((verse)=>{
        if(verse.length != 0){
          res.send('El usuario ya ha guardado este verso');
          console.log('Verso guardado: ', verse);
          return;
        }

        let newVerse = new Verse({content, user_id});
        newVerse.save()
        .then((savedVerse)=>{
          res.send(savedVerse);
        })
        .catch((err) =>{
          res.send(err);
        })
      })
  },
  delete: (req, res, next)=>{
    const verseId = req.params.id;
    Verse.findByIdAndRemove(verseId, (err, doc)=>{
      if (err) {
        console.log("error en delete verse");
      } else {
        res.send({
          deletedVerse: doc
        });
      }
    });
  },
  retrieve: (req, res, next)=>{
    const verseId = req.params.id;
    console.log('he recibido', verseId);
    Verse.findById(verseId)
      .exec()
      .then((newVerse)=>{
        console.log('new verse', newVerse)
        verseToFile(newVerse.content)
        .then( fileName => {
          console.log('filename', fileName);
          return res.render('verse/index', {
            type: 'old',
            title:"Un bello verso",
            verse: newVerse.content,
            file: `/${fileName}`
          })});
      })
  }
}
