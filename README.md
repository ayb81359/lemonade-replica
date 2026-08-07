# 🍋 Lemonade.gg Replica - AI Roblox Game Builder

An open-source replica of **Lemonade.gg**, an AI-powered platform for building Roblox games using natural language prompts.

## 🎮 Features

- ✨ **Natural Language Prompts**: Describe your game idea in plain English
- 🤖 **AI Code Generation**: Converts prompts to Luau/Lua scripts automatically
- 🔌 **Roblox Studio Integration**: Plugin for seamless code syncing
- 📁 **Project Management**: Track prompts, versions, and projects
- 🎨 **Asset Generation**: Support for UI/asset templates
- 🐛 **Console Mirroring**: Debug directly in the platform
- 💾 **Version Control**: Roll back and manage iterations

## 🏗️ Project Structure

```
lemonade-replica/
├── backend/              # Node.js/Express API + AI
├── frontend/             # React Dashboard
├── plugin/               # Roblox Studio Plugin (Lua)
├── templates/            # Game Templates (Lua)
├── docs/                 # Documentation
└── docker-compose.yml    # Docker setup
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- MongoDB (local or Atlas)
- Roblox Studio
- OpenAI API Key

### Installation

```bash
# Clone repo
git clone https://github.com/ayb81359/lemonade-replica.git
cd lemonade-replica

# Backend Setup
cd backend
npm install
cp .env.example .env
npm run dev

# Frontend Setup (new terminal)
cd frontend
npm install
npm run dev
```

Open http://localhost:3000 and start building! 🎮

## 📚 Documentation

- [API Documentation](./docs/API.md)
- [Setup Guide](./docs/SETUP.md)

## 🤝 Contributing

Contributions welcome! Feel free to submit PRs.

## 📄 License

MIT License - See LICENSE file

## ⚠️ Disclaimer

Educational/open-source project. Not affiliated with official Lemonade.gg or Roblox Corporation.