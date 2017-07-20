const router = require('express').Router();
const Verse = require('../models/Verse');
const VerseController = require('../controllers/VerseController');

router.get('/', VerseController.index);

router.get('/list', (VerseController.list));

router.post('/save', VerseController.save);

router.get('/delete/:id', VerseController.delete);

router.get('/:id', VerseController.retrieve);

module.exports = router;
