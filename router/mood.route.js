const express = require('express');
const router = express.Router();
const moodService = require('../services/mood.service');
const {authenticate} = require('../passportJwtValidation');

router.post('/track', auth, moodService.trackMood);
router.get('/today', auth, moodService.getTodayEntry);
router.get('/week', auth, moodService.getWeeklyEntries);

module.exports = router;
