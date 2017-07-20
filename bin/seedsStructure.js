const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/poetry-generator');
const VerseStructure = require('../models/VerseStructure');

const verseStructures = [{
  structure: ['1@_when', '1@_where', '2#_Papi']
}];

VerseStructure.create(verseStructures, (err, sol) => {
  if (err) {
    throw err;
  }

  sol.forEach((e) => {
  });
  mongoose.connection.close();
});
