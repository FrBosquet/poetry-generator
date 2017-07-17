// const TTS = require('./TTS');
const googleTTS = require('google-tts-api');
const http = require('https');
const fs = require('fs');
const uniqueFilename = require('unique-filename');

module.exports = {
  index: (req, res, next) => {

    var who, adj, what, how, where, when;

    who = ['mami', 'perra', 'gata', 'mi amol', 'linda', 'esposa', 'colegiala','mujer', 'perra sarnosa', 'mamita', 'mi par'];
    adj = ['linda', 'preciosa', 'tierna', 'caliente', 'tenebrosa', 'guapa', 'sexy', 'fogosa', 'de hielo','electrica'];
    what = ['perrear', 'perrearte', 'darte','amarte','destruirte','violentarte','hacerte el amor','jambiarte','hacerlo','bailar','menearme'];
    how = ['duro', 'fuerte','bien suave', 'sin censura','despacito','con ritmo','a lo cubano','a lo latino','con ternura','sin fin','hasta abajo'];
    where = ['en tu casa','en tu coche', 'en la party','en la disco', 'en el malecon','en el barrio','en un burdel','en el parque','en mi yate', 'en el hood'];
    when = ['hasta el amanecer','toda la noche','toda la semana','el fin de semana','hasta morir','por la eternidad','hasta el final'];

    function randomItem(arr){
      return arr[Math.floor(Math.random()*arr.length)];
    }

    function verse(){
      return randomItem(who) + " " +
        randomItem(adj) + " quiero " +
        randomItem(what) + " " +
        randomItem(how) + " " +
        randomItem(where) + " " +
        randomItem(when);
    }

    let newVerse = verse();

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
        },200);
      })
      .catch(function (err) {
          console.error(err.stack);
          next(err);
        }
      )
  }
}
