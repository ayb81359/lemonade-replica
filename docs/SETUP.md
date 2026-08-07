# Lemonade.gg Replica - Setup Guide

## Prerequisites
- Node.js 16+
- MongoDB (local or Atlas)
- OpenAI API Key
- Roblox Studio
- Git

## Step 1: Clone Repository

```bash
git clone https://github.com/ayb81359/lemonade-replica.git
cd lemonade-replica
```

## Step 2: Backend Setup

```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env` and add your keys:
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/lemonade-replica
OPENAI_API_KEY=sk-your-key-here
JWT_SECRET=your-secret-key-here
```

Start backend:
```bash
npm run dev
```

You should see:
```
✅ MongoDB Connected
🚀 Server running on port 5000
📡 API: http://localhost:5000/api
```

## Step 3: Frontend Setup

In a new terminal:
```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:3000

## Step 4: Configure MongoDB

### Option A: Local MongoDB
```bash
# Install MongoDB from https://www.mongodb.com/try/download/community
mongod
# Default: mongodb://localhost:27017
```

### Option B: MongoDB Atlas (Cloud)
1. Visit https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Get the connection string
4. Add to `.env` as `MONGODB_URI`

## Step 5: Get OpenAI API Key

1. Visit https://platform.openai.com/api_keys
2. Create a new secret key
3. Add to `.env` as `OPENAI_API_KEY`

## Step 6: Install Roblox Plugin

1. Copy the `plugin/` folder to:
   - **Windows**: `%LOCALAPPDATA%\Roblox\Plugins`
   - **Mac**: `~/Library/Roblox/Plugins`
   - **Linux**: `~/.local/share/Roblox/Plugins`

2. Restart Roblox Studio
3. Plugin should appear in the "Plugins" tab

## Testing

### Test Backend
```bash
curl http://localhost:5000/health
```

Should return:
```json
{"status": "✅ API Running", "timestamp": "2024-01-01T..."}
```

### Test Frontend
Open http://localhost:3000 - You should see the home page

### Test Code Generation
1. Click "Get Started"
2. Create a new project
3. Choose a game type (Simulator, Tycoon, Obby, etc.)
4. Enter a prompt like "Create a coin collection system"
5. Click "Generate Code"
6. Watch the AI generate Roblox code!

## Docker Setup (Optional)

```bash
docker-compose up -d
```

This starts MongoDB, Backend, and Frontend in containers.

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check connection string in `.env`
- Verify credentials if using Atlas

### OpenAI Error
- Verify API key is valid
- Check account has credits
- Ensure key starts with `sk-`

### CORS Error
- Ensure frontend URL in backend `.env`
- Clear browser cache
- Restart both servers

### Plugin Not Loading
- Restart Roblox Studio
- Check plugin folder permissions
- Verify file structure is correct
