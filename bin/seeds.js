const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/poetry-generator');
const Word = require('../models/Word');

const words = [{
  content: 'mami',
  type: 'who',
  user_id: 4356
}, {
  content: 'perra',
  type: 'who',
  user_id: 43563
}, {
  content: 'mi amol',
  type: 'who',
  user_id: 43563
}, {
  content: 'preciosa',
  type: 'adj',
  user_id: 4356389
}, {
  content: 'tierna',
  type: 'adj',
  user_id: 4356309
}, {
  content: 'caliente',
  type: 'adj',
  user_id: 43563
}, {
  content: 'quiero',
  type: 'verb',
  user_id: 435639768765
}, {
  content: 'deseo',
  type: 'verb',
  user_id: 43563657
}, {
  content: 'volvería',
  type: 'verb',
  user_id: 435633241
}, {
  content: 'perrear',
  type: 'what',
  user_id: 435633124
}, {
  content: 'darte',
  type: 'what',
  user_id: 43563436
}, {
  content: 'amarte',
  type: 'what',
  user_id: 43563432
}, {
  content: 'fuerte',
  type: 'how',
  user_id: 4356343256
}, {
  content: 'bien suave',
  type: 'how',
  user_id: 4356343256
}, {
  content: 'sin censura',
  type: 'how',
  user_id: 4356343256
}, {
  content: 'en tu casa',
  type: 'where',
  user_id: 4356343256978
}, {
  content: 'en la party',
  type: 'where',
  user_id: 4356343256978
}, {
  content: 'en el hood',
  type: 'where',
  user_id: 435634325675465
}, {
  content: 'hasta el amanecer',
  type: 'when',
  user_id: 4356343256
}, {
  content: 'toda la noche',
  type: 'when',
  user_id: 4356343256
}, {
  content: 'toda la semana',
  type: 'when',
  user_id: 4356343256234567
}, {
  content: 'quiero',
  type: 'verb',
  user_id: 4343256
}, {
  content: 'deseo',
  type: 'verb',
  user_id: 4356256
}, {
  content: 'volvería',
  type: 'verb',
  user_id: 435634234567
}];

Word.create(words, (err, sol) => {
  if (err) {
    throw err;
  }

  sol.forEach((word) => {
  });
  mongoose.connection.close();
});
