const TTS = require('./TTS');

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

    let fileName = TTS(newVerse);

    console.log("En VerseController filename vale", fileName);

    res.render('verse/index', { title:"Random verse", verse: newVerse, file: fileName})
  }
}
