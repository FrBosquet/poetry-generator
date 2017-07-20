const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/poetry-generator');
const Word = require('../models/Word');

const words = [{content: 'mujer', type: 'who',user_id: 0},
{content: 'angel', type: 'who',user_id: 0},
{content: 'damisela', type: 'who',user_id: 0},
{content: 'princesa', type: 'who',user_id: 0},
{content: 'doncella', type: 'who',user_id: 0},
{content: 'colegiala', type: 'who',user_id: 0},
{content: 'bebe', type: 'who',user_id: 0},
{content: 'reina', type: 'who',user_id: 0},
{content: 'mi amor', type: 'who',user_id: 0},
{content: 'corazon', type: 'who',user_id: 0},
{content: 'mi niña', type: 'who',user_id: 0},

{content: 'preciosa', type: 'adj',user_id: 0},
{content: 'tierna', type: 'adj',user_id: 0},
{content: 'linda', type: 'adj',user_id: 0},
{content: 'bonita', type: 'adj',user_id: 0},
{content: 'valiente', type: 'adj',user_id: 0},
{content: 'fogosa', type: 'adj',user_id: 0},
{content: 'morena', type: 'adj',user_id: 0},
{content: 'rubia', type: 'adj',user_id: 0},
{content: 'de azabache', type: 'adj',user_id: 0},
{content: 'de piel suave', type: 'adj',user_id: 0},
{content: 'de tez clara', type: 'adj',user_id: 0},
{content: 'de corazon sincero', type: 'adj',user_id: 0},

{content: 'quiero', type: 'verb',user_id: 0},
{content: 'deseo', type: 'verb',user_id: 0},
{content: 'volvería', type: 'verb',user_id: 0},
{content: 'perrear', type: 'what',user_id: 0},
{content: 'darte', type: 'what',user_id: 0},
{content: 'amarte', type: 'what',user_id: 0},
{content: 'fuerte', type: 'how',user_id: 0},
{content: 'bien suave', type: 'how',user_id: 0},
{content: 'sin censura', type: 'how',user_id: 0},
{content: 'en tu casa', type: 'where',user_id: 0},
{content: 'en la party', type: 'where',user_id: 0},
{content: 'en el hood', type: 'where',user_id: 0},
{content: 'hasta el amanecer', type: 'when',user_id: 0},
{content: 'toda la noche', type: 'when',user_id: 0},
{content: 'toda la semana', type: 'when',user_id: 0},
{content: 'quiero', type: 'verb',user_id: 0},
{content: 'deseo', type: 'verb',user_id: 0},
{content: 'volvería', type: 'verb',user_id: 0}];

Word.create(words, (err, sol) => {
  if (err) {
    throw err;
  }

  sol.forEach((word) => {
  });
  mongoose.connection.close();
});
