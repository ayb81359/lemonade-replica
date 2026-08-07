# Lemonade.gg Replica - Tutorial

## Getting Started with Lemonade.gg Replica

This guide will walk you through creating your first AI-generated Roblox game!

## 🎮 Basic Workflow

### Step 1: Register/Login
1. Open http://localhost:3000
2. Click "Get Started"
3. Register with your email or login

### Step 2: Create a Project
1. Click "New Project"
2. Enter a project name: "My First Game"
3. Choose a game type:
   - **Simulator**: Idle/farming games
   - **Tycoon**: Business management games
   - **Obby**: Obstacle course games
   - **Pet Game**: Collection/breeding games
   - **Custom**: Your own game idea
4. Click "Create Project"

### Step 3: Generate Code
1. Click on your project to open the editor
2. In the "Describe Your Feature" box, enter a prompt:
   ```
   Create a coin collection system where players click to earn coins
   ```
3. Click "🤖 Generate Code"
4. Wait for the AI to generate Roblox Luau code
5. The generated code will appear on the right side

### Step 4: Use the Code in Roblox Studio
1. Copy the generated code
2. Open Roblox Studio
3. Create a new place or open an existing one
4. Insert a new Script into ServerScriptService
5. Paste the generated code
6. Test your game!

## 💡 Prompt Examples

### Simulator Game
```
Create a resource farm system where players automatically earn coins 
over time. Add an upgrade system where players can buy multipliers.
```

### Tycoon Game
```
Build a pizza shop tycoon where players can buy ovens, hire workers,
and earn revenue from customers.
```

### Obby Game
```
Create a parkour obstacle course with 15 levels. Each level gets 
progressively harder with different types of obstacles.
```

### Pet Game
```
Create a pet adoption system where players can collect different pets,
feed them, and breed them to get rare species.
```

## 🎨 Game Templates

### Simulator Template
```lua
-- Includes:
-- - Player resource tracking
-- - Automatic resource generation
-- - Upgrade system
-- - Leaderboard
```

### Tycoon Template
```lua
-- Includes:
-- - Building purchase system
-- - Revenue collection
-- - Upgrade unlocks
-- - Player progression
```

### Obby Template
```lua
-- Includes:
-- - Level progression
-- - Checkpoint system
-- - Respawn mechanics
-- - Leaderboard by time
```

## ⚙️ Advanced Features

### Credit System
- Each code generation costs 10 credits
- You start with 100 credits
- Purchase more credits in the dashboard

### Version Control
- Each generation is saved as a version
- View generation history in the "Generation History" panel
- Revert to previous versions anytime

### Code Optimization
- The AI automatically optimizes code for performance
- Includes error handling
- Follows Roblox best practices

## 🐛 Debugging Tips

### If code doesn't work:
1. Check the Roblox Studio output for errors
2. Verify all instances and services exist
3. Test in a local server first

### Common Issues:
- **"Service not found"** - Check service name spelling
- **"Nil value"** - Ensure instances are properly named
- **"Timeout"** - Check for infinite loops

## 📚 Next Steps

1. **Combine Multiple Features** - Generate different features and merge them
2. **Customize Generated Code** - Edit and improve the AI-generated code
3. **Build Your Game** - Create a complete game using multiple generations
4. **Share Your Game** - Publish your game on Roblox

## 🤝 Tips & Tricks

1. **Be Specific in Prompts** - The more details, the better the code
2. **Start Simple** - Generate one feature at a time
3. **Test Early** - Test generated code in Roblox Studio immediately
4. **Iterate** - Generate multiple versions and pick the best
5. **Document** - Keep notes of what works

## 🎓 Learning Resources

- [Roblox Luau Documentation](https://create.roblox.com/docs/reference/engine)
- [Roblox Studio Tutorials](https://www.youtube.com/c/RobloxCreator)
- [Our API Documentation](./API.md)

## 🆘 Getting Help

Stuck? Try these:
1. Check the [API Documentation](./API.md)
2. Review the [Setup Guide](./SETUP.md)
3. Look at the template code in `/templates`
4. Check game-specific documentation

---

**Happy building! 🍋🎮**
