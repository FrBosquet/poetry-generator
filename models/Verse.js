const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const verseSchema = new Schema({
  content: String,
});

const Verse = mongoose.model('verse', verseSchema);
module.exports = Verse;
