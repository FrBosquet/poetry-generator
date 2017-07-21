const router = require('express').Router();
const Verse = require('../models/Verse');
const VerseController = require('../controllers/VerseController');
const ensureLogin = require("connect-ensure-login");


router.get('/', ensureLogin.ensureLoggedIn('/auth/login'), VerseController.index);

router.get('/list', ensureLogin.ensureLoggedIn('/auth/login'), (VerseController.list));

router.post('/save', ensureLogin.ensureLoggedIn('/auth/login'),VerseController.save);

router.get('/delete/:id', ensureLogin.ensureLoggedIn('/auth/login'), VerseController.delete);

router.get('/show/:id', VerseController.retrieve);

module.exports = router;
