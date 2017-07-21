require('dotenv').config({path: '../.env'});
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_DB_URL);
const Word = require('../models/Word');

const words = [
  {content: 'mujer',                              type: 'who'        },
  {content: 'angel',                              type: 'who'        },
  {content: 'damisela',                           type: 'who'        },
  {content: 'princesa',                           type: 'who'        },
  {content: 'doncella',                           type: 'who'        },
  {content: 'colegiala',                          type: 'who'        },
  {content: 'bebe',                               type: 'who'        },
  {content: 'reina',                              type: 'who'        },
  {content: 'mi amor',                            type: 'who'        },
  {content: 'corazon',                            type: 'who'        },
  {content: 'mi niña',                            type: 'who'        },

  {content: 'preciosa',                           type: 'adj'        },
  {content: 'tierna',                             type: 'adj'        },
  {content: 'linda',                              type: 'adj'        },
  {content: 'bonita',                             type: 'adj'        },
  {content: 'valiente',                           type: 'adj'        },
  {content: 'fogosa',                             type: 'adj'        },
  {content: 'morena',                             type: 'adj'        },
  {content: 'rubia',                              type: 'adj'        },
  {content: 'de azabache',                        type: 'adj'        },
  {content: 'de piel suave',                      type: 'adj'        },
  {content: 'de tez clara',                       type: 'adj'        },
  {content: 'de corazon sincero',                 type: 'adj'        },

  {content: 'quiero',                             type: 'verb'       },
  {content: 'deseo',                              type: 'verb'       },
  {content: 'volvería ',                          type: 'verb'       },
  {content: 'anhelo',                             type: 'verb'       },
  {content: 'sueño con',                          type: 'verb'       },
  {content: 'espero',                             type: 'verb'       },
  {content: 'ansío',                              type: 'verb'       },
  {content: 'temo no poder',                      type: 'verb'       },
  {content: 'me comprometo a',                    type: 'verb'       },
  {content: 'disfruto al',                        type: 'verb'       },
  {content: 'fantaseo con',                       type: 'verb'       },
  {content: 'tanteo',                             type: 'verb'       },

  {content: 'amarte',                             type: 'what'       },
  {content: 'disfrutarte',                        type: 'what'       },
  {content: 'rozarte',                            type: 'what'       },
  {content: 'sentirte',                           type: 'what'       },
  {content: 'besarte',                            type: 'what'       },
  {content: 'pasear contigo',                     type: 'what'       },
  {content: 'pasar tiempo contigo',               type: 'what'       },
  {content: 'compartir mi vida contigo',          type: 'what'       },
  {content: 'expandir mi corazon',                type: 'what'       },
  {content: 'susurrarte al oido',                 type: 'what'       },
  {content: 'proclamar nuestor amor',             type: 'what'       },
  {content: 'gritar mi alegría',                  type: 'what'       },
  {content: 'declararte mis sentimientos',        type: 'what'       },

  {content: 'fuerte',                             type: 'how'        },
  {content: 'bien suave',                         type: 'how'        },
  {content: 'sin censura',                        type: 'how'        },
  {content: 'delicadamente',                      type: 'how'        },
  {content: 'sin vergüenza',                      type: 'how'        },
  {content: 'sin importar el que diran',          type: 'how'        },
  {content: 'tiernamente',                        type: 'how'        },
  {content: 'discretamente',                      type: 'how'        },
  {content: 'fuertemente',                        type: 'how'        },
  {content: 'gordo',                              type: 'how'        },
  {content: 'sin temer las consecuencias',        type: 'how'        },
  {content: 'sinceramente',                       type: 'how'        },
  {content: 'en un ciclo sin fin',                type: 'how'        },
  {content: 'como si no existiese un mañana',     type: 'how'        },
  {content: 'como si el pasado no importase',     type: 'how'        },
  {content: 'con la inocencia de un niño',        type: 'how'        },
  {content: 'como si fueramos dos jovenes',       type: 'how'        },

  {content: 'en tu casa',                         type: 'where'      },
  {content: 'en la party',                        type: 'where'      },
  {content: 'en el barrio',                       type: 'where'      },
  {content: 'bajo un arbol',                      type: 'where'      },
  {content: 'en un idilico rincón',               type: 'where'      },
  {content: 'bajo un sol de justicia',            type: 'where'      },
  {content: 'en un coche',                        type: 'where'      },
  {content: 'en tu coche',                        type: 'where'      },
  {content: 'en cada lugar',                      type: 'where'      },
  {content: 'bajo tu paraguas',                   type: 'where'      },
  {content: 'sobre el cesped humedo',             type: 'where'      },
  {content: 'en un cenador',                      type: 'where'      },
  {content: 'en mi humilde mansión',              type: 'where'      },
  {content: 'en un lugar de la mancha',           type: 'where'      },
  {content: 'en ironhack',                        type: 'where'      },
  {content: 'en las nubes',                       type: 'where'      },
  {content: 'entre las sabanas',                  type: 'where'      },
  {content: 'en tu corazón',                      type: 'where'      },
  {content: 'en oriente',                         type: 'where'      },
  {content: 'en tu finca',                        type: 'where'      },
  {content: 'en la playa',                        type: 'where'      },
  {content: 'en tu regazo',                       type: 'where'      },
  {content: 'en todo lugar',                      type: 'where'      },

  {content: 'hasta el amanecer',                  type: 'when'       },
  {content: 'toda la noche',                      type: 'when'       },
  {content: 'toda la semana',                     type: 'when'       },
  {content: 'en todo momento',                    type: 'when'       },
  {content: 'todo el día',                        type: 'when'       },
  {content: 'cada maldito minuto',                type: 'when'       },
  {content: 'durante horas',                      type: 'when'       },
  {content: 'hasta morir',                        type: 'when'       },
  {content: 'hasta desfallecer',                  type: 'when'       },
  {content: 'hasta fenecer',                      type: 'when'       },
  {content: 'hasta que nazca nuestro hijo',       type: 'when'       },
  {content: 'hasta mi último aliento',            type: 'when'       },
  {content: 'hasta que cierren el bar',           type: 'when'       },
];

Word.create(words, (err, sol) => {
  if (err) {
    throw err;
  }

  sol.forEach((word) => {
  });
  mongoose.connection.close();
});
