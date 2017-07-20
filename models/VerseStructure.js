const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const verseStructureSchema = new Schema({
  structure: [String]
});

const VerseStructure = mongoose.model('VerseStructure', verseStructureSchema);
module.exports = VerseStructure;
