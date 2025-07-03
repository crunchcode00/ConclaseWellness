const MoodEntry = require('../models/moodEntry');

exports.trackMood = async (req, res) => {
  const { mood, emotions, triggers, wordCount } = req.body;
  const date = new Date().toISOString().split('T')[0];

  try {
    const entry = await MoodEntry.upsert({
      UserId: req.user.id,
      date,
      mood,
      emotions,
      triggers,
      wordCount
    });
    res.status(200).json({ message: 'Mood tracked successfully', entry });
  } catch (err) {
    res.status(500).json({ message: 'Error tracking mood', error: err.message });
  }
};