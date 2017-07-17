var googleTTS = require('google-tts-api');
var http = require('https');
var fs = require('fs');
var uniqueFilename = require('unique-filename');

module.exports = function(verse){
    console.log(verse);
    return googleTTS(verse, 'es', 0.8)
      .then(function (url) {
        var filename = uniqueFilename("public/verses");
        console.log(filename);
        var file = fs.createWriteStream(filename+'.mp3');
        var request = http.get(url, function(response) {
          response.pipe(file);
        });
        console.log("En tts file vale", filename);
        return filename;
      })
      .catch(function (err) {
          console.error(err.stack);
        }
      )
    };
