const router = require('express').Router();
const WordController = require('../controllers/WordController');

router.get('/new', WordController.index);
router.post('/new', WordController.new);

router.get('/listall', WordController.listAll);

router.get('/listword/:id', WordController.listOne);

router.get('/deleteword/:id', WordController.deleteOne);

router.get('/userwords/:id', WordController.findUserWords);

router.get('/listtype/:type', WordController.findTypeOfWords);

module.exports = router;
