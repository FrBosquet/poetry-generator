const router = require('express').Router();
const WordController = require('../controllers/WordController');

router.get('/', WordController.index);
router.post('/new', WordController.new);

module.exports = router;
