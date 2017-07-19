const router = require('express').Router();
const WordController = require('../controllers/WordController');

router.get('/new', WordController.index);

router.post('/new', WordController.new);

router.get('/list', WordController.listAll);

router.get('/show/:id', WordController.listOne);

router.get('/delete/:id', WordController.deleteOne);

router.get('/byUser/:id', WordController.findUserWords);

router.get('/listtype/:type', WordController.findTypeOfWords);

module.exports = router;
