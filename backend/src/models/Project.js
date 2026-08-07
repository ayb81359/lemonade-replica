const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  gameType: { type: String, enum: ['simulator', 'tycoon', 'obby', 'pet-game', 'shooter', 'custom'], default: 'custom' },
  generations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Generation' }],
  version: { type: Number, default: 1 },
  code: String,
  status: { type: String, enum: ['draft', 'active', 'archived'], default: 'draft' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', projectSchema);