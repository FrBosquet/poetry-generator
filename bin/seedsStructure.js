const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/poetry-generator');
const VerseStructure = require('../models/VerseStructure');

const verseStructures = [
  {
    structure: ['1#_¿no es verdad', '1@_who', '1@-adj','1#_que','1@_where','1@_verb','1@-what','1@-when','1#_?']
  },
  {
    structure: ['1#_¿acaso no es verdad', '1@_who', '1@-adj','1#_que','1@_where','1@_verb','1@-what','1@-when','1#_?']
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
