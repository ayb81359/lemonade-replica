const express = require('express');
const router = express.Router();

router.get('/suggestions', (req, res) => {
  const suggestions = [
    'Create a pet collection game with a shop',
    'Build a tycoon game with upgradable buildings',
    'Make an obby with 10 levels and checkpoints',
    'Design a shooter with enemies and weapons',
    'Create a simulator game where players farm coins',
    'Build a parkour game with obstacles',
    'Make a fishing game with different fish types',
    'Create a cooking game with recipes'
  ];
  res.json(suggestions);
});

router.get('/templates', (req, res) => {
  const templates = [
    { gameType: 'simulator', template: 'Create a {resource} simulator where players gain resources' },
    { gameType: 'tycoon', template: 'Build a business tycoon game with upgrades' },
    { gameType: 'obby', template: 'Make an obby with levels and obstacles' },
    { gameType: 'pet-game', template: 'Create a pet game where players can collect pets' }
  ];
  res.json(templates);
});

module.exports = router;