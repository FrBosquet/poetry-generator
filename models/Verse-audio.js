const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const verseAudioSchema = new Schema({
  expires: Date,
  file: String,
});

const VerseAudio = mongoose.model('verse-audio', verseAudioSchema);
module.exports = VerseAudio;
