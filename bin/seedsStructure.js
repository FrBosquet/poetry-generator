const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/poetry-generator');
const VerseStructure = require('../models/VerseStructure');

// who = ['mami', 'perra', 'gata', 'mi amol', 'linda', 'esposa', 'colegiala','mujer', 'perra sarnosa', 'mamita', 'mi par'];
// adj = ['linda', 'preciosa', 'tierna', 'caliente', 'tenebrosa', 'guapa', 'sexy', 'fogosa', 'de hielo','electrica'];
// what = ['perrear', 'perrearte', 'darte','amarte','destruirte','violentarte','hacerte el amor','jambiarte','hacerlo','bailar','menearme'];
// how = ['duro', 'fuerte','bien suave', 'sin censura','despacito','con ritmo','a lo cubano','a lo latino','con ternura','sin fin','hasta abajo'];
// where = ['en tu casa','en tu coche', 'en la party','en la disco', 'en el malecon','en el barrio','en un burdel','en el parque','en mi yate', 'en el hood'];
// when = ['hasta el amanecer','toda la noche','toda la semana','el fin de semana','hasta morir','por la eternidad','hasta el final'];
//verb: intencidon: desearía, me gustaría

const verseStructures = [
  {
    //Toda la noche.-estuve deseand, - linda mujer - amarte amarte amarte,
    structure: ['1@_when', '1_#estuve deseando,', '1@-adj','1@_who','1#_,','3@_what','1#_,','1#-what','1@-how','1#_y','1@-how']
  },
  {
    structure: ['1#_¿no es verdad', '1@_who', '1@-adj','1#_que','1@_where','1@_verb','1@-what','1@-when','1#_?']
  },
  {
    structure: ['1#_¿acaso no es verdad', '1@_who', '1@-adj','1#_que','1@_where','1@_verb','1@-what','1@-when','1#_?']
  },
  {
    structure: ['1#_hace tiempo','1@_who','1#_que','1@-verb','1@_what','1@_when','1@_where','1@-when']
  },
  {
    structure: ['1#_hace tiempo','1@_who','1#_que','1@-verb','1@_what','1@_when','1@_where','1@-when']
  }
];

VerseStructure.create(verseStructures, (err, sol) => {
  if (err) {
    throw err;
  }

  sol.forEach((e) => {
  });
  mongoose.connection.close();
});
