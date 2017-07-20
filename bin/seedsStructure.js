const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/poetry-generator');
const VerseStructure = require('../models/VerseStructure');

const verseStructures = [
  { structure: ['1@_when',                '1_#estuve deseando,', '1@-adj',      '1@_who',   '1#_,'    ,   '3@_what',  '1#_,',     '1@-what',  '1@_how', '1#_y', '1@-how']},
  { structure: ['1#_¿no es verdad',       '1@_who',              '1@-adj',      '1#_que',   '1@_where',   '1@_verb',  '1@-what',  '1@_when',  '1#_?']},
  { structure: ['1#_¿acaso no es verdad', '1@_who',              '1@-adj',      '1#_que',   '1@_where',   '1@_verb',  '1@-what',  '1@_when',  '1#_?']},
  { structure: ['1#_hace tiempo',         '1@-who',              '1#_que',      '1@-verb',  '1@_what' ,   '1@-when',  '1@_where', '1@-when']},
  { structure: ['1@_who',                 '1@_adj',              '1@_verb',     '1@-what',  '1@_how' ,    '1@_where', '1@_when']},
  { structure: ['1#_desde que te conocí', '1@_verb',             '1@_what',     '1@-who',   '1#_desde que te comí' ,  '1@_verb',  '1@_what',  '1@-who']},
  { structure: ['1#_Perro malo',          '1@_verb',             '1@_what',     '1@-how',   '1@_where',   '1@-when']},
  { structure: ['3#_Papi',                '1@_verb',             '1@_what',     '1@-when',  '3#_Papi',    '1@_verb',  '1@_what', '1@-where',]},
  { structure: ['1#_ay mi amol',          '1@_verb',             '1@_what',     '1@-how',
                '1#_ay mi amol',          '1@_verb',             '1@_what',     '1@-how',
                '1#_ay mi amol',          '1@_verb',             '1@_what',     '1@-how',
                '1#_ay mi amol',          '1@_verb',             '1@_what',     '1@-how']},
  { structure: ['1@-how',                 '1@_how',              '1@-how',      '1@-when',  '1@_verb',    '1@-how']},
  { structure: ['1@-how',                 '1@-how',              '1@-how',      '1@-when',  '1@-verb',    '1@_how']},
];

VerseStructure.create(verseStructures, (err, sol) => {
  if (err) {
    throw err;
  }

  sol.forEach((e) => {
  });
  mongoose.connection.close();
});
