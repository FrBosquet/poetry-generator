const googleTTS = require('google-tts-api');
const http = require('https');
const fs = require('fs');
const uniqueFilename = require('unique-filename');
const Word = require('../models/Word');

function randomWordWithType(words, type){
  let wordsOfType = words.filter((obj)=> obj.type == type);
  let index = Math.floor(Math.random()*wordsOfType.length);
  return wordsOfType[index].content;
}

function verse(words){
  return randomWordWithType(words, 'who') + " " +
    randomWordWithType(words, 'adj') + " quiero " +
    randomWordWithType(words, 'what') + " " +
    randomWordWithType(words, 'how') + " " +
    randomWordWithType(words, 'where') + " " +
    randomWordWithType(words, 'when');
}

module.exports = {
  index: (req, res, next) => {

    var who, adj, what, how, where, when;

    Word.find((err, words) => {
      if(err) next(err);

      let newVerse = verse(words);
      googleTTS(newVerse, 'es', 0.8)
      .then(function (url) {
        var filename = uniqueFilename("public/verses");
        console.log(filename);
        var file = fs.createWriteStream(filename+'.mp3');

        var request = http.get(url, function(response) {
          response.pipe(file);
        });

        console.log("En tts file vale", filename);

        setTimeout(function(){
          res.render('verse/index', { title:"Random verse", verse: newVerse, file: filename.replace('public/', '') + '.mp3'})
        },1000);
      })
      .catch(function (err) {
        console.error(err.stack);
        next(err);
      }
    )});
  }
}
