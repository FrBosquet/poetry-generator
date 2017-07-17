const router = require('express').Router()
const VerseController = require('../controllers/VerseController')

router.get('/', VerseController.index)

module.exports = router
