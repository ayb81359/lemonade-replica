const express = require('express');
const Generation = require('../models/Generation');
const Project = require('../models/Project');
const User = require('../models/User');
const aiService = require('../services/aiService');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { projectId, prompt } = req.body;
    const userId = req.headers['user-id'];
    if (!userId) return res.status(401).json({ error: 'User ID required' });
    if (!projectId) return res.status(400).json({ error: 'Project ID required' });
    if (!prompt) return res.status(400).json({ error: 'Prompt required' });
    
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });
    if (user.credits < 10) {
      return res.status(400).json({ error: 'Insufficient credits. Need 10, have ' + user.credits });
    }

    const project = await Project.findById(projectId);
    if (!project) return res.status(404).json({ error: 'Project not found' });

    const startTime = Date.now();
    const result = await aiService.generateCode(prompt, project.gameType);
    const executionTime = Date.now() - startTime;

    if (!result.success) {
      return res.status(500).json({ error: result.error });
    }

    const generation = new Generation({
      projectId,
      userId,
      prompt,
      generatedCode: result.code,
      status: 'completed',
      creditsCost: 10,
      executionTime
    });
    await generation.save();

    user.credits -= 10;
    project.code = result.code;
    project.version += 1;
    project.generations.push(generation._id);
    
    await user.save();
    await project.save();

    res.json({ ...generation.toObject(), creditsRemaining: user.credits });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/project/:projectId', async (req, res) => {
  try {
    const generations = await Generation.find({ projectId: req.params.projectId }).sort({ createdAt: -1 });
    res.json(generations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;