const googleTTS = require('google-tts-api');
const http = require('https');
const fs = require('fs');
const uniqueFilename = require('unique-filename');
const Word = require('../models/Word');
const Verse = require('./VerseComposer');

function verseToFile( verse ){
    return new Promise( (resolve,reject) => {
      googleTTS( verse , 'es', 1.2)
        .then(function (url) {
          var filename = uniqueFilename("public/verses");
          console.log(filename);
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
        let newVerse = Verse(words);
        verseToFile(newVerse)
          .then( fileName => {
            return res.render('verse/index', {
              title:"Random verse",
              verse: newVerse,
              file: fileName
            })
      })
      .catch(function (err) {
        console.error(err.stack);
        next(err);
      }
    )});
  }
}
