const mongoose = require('mongoose');

const generationSchema = new mongoose.Schema({
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  prompt: { type: String, required: true },
  generatedCode: String,
  status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
  error: String,
  creditsCost: { type: Number, default: 10 },
  executionTime: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Generation', generationSchema);