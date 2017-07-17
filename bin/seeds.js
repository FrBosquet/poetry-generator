const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/poetry-generator');
const Word = require('../models/Word');

const words = [{
  content: 'mami',
  type: 'who'
}, {
  content: 'perra',
  type: 'who'
}, {
  content: 'mi amol',
  type: 'who'
}, {
  content: 'preciosa',
  type: 'adj'
}, {
  content: 'tierna',
  type: 'adj'
}, {
  content: 'caliente',
  type: 'adj'
}, {
  content: 'perrear',
  type: 'what'
}, {
  content: 'darte',
  type: 'what'
}, {
  content: 'amarte',
  type: 'what',
}, {
  content: 'fuerte',
  type: 'how'
}, {
  content: 'bien suave',
  type: 'how'
}, {
  content: 'sin censura',
  type: 'how'
}, {
  content: 'en tu casa',
  type: 'where'
}, {
  content: 'en la party',
  type: 'where'
}, {
  content: 'en el hood',
  type: 'where'
}, {
  content: 'hasta el amanecer',
  type: 'when'
}, {
  content: 'toda la noche',
  type: 'when'
}, {
  content: 'toda la semana',
  type: 'when'
}];

Word.create(words, (err, sol) => {
  if (err) {
    throw err;
  }

  sol.forEach((word) => {
  });
  mongoose.connection.close();
});
