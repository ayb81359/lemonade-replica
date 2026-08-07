-- Lemonade.gg Replica - Roblox Game Template
-- Obby (Obstacle Course) Base Code

local Players = game:GetService('Players')

-- Obby Configuration
local LEVELS = 10
local CHECKPOINT_FOLDER = workspace:FindFirstChild('Checkpoints') or Instance.new('Folder')
CHECKPOINT_FOLDER.Name = 'Checkpoints'
CHECKPOINT_FOLDER.Parent = workspace

local playerProgress = {}

-- Track player checkpoints
local function initPlayer(player)
  playerProgress[player.UserId] = {
    currentLevel = 1,
    checkpoints = {},
    startTime = tick()
  }
end

-- Handle checkpoint
local function onTouched(hit, level)
  local player = Players:FindFirstChild(hit.Parent.Name)
  if player then
    local progress = playerProgress[player.UserId]
    if progress and level > progress.currentLevel then
      progress.currentLevel = level
      print(player.Name .. ' reached level ' .. level)
    end
  end
end

-- Create checkpoints
for i = 1, LEVELS do
  local checkpoint = Instance.new('Part')
  checkpoint.Name = 'Checkpoint' .. i
  checkpoint.CanCollide = true
  checkpoint.Transparency = 0.5
  checkpoint.BrickColor = BrickColor.new('Lime green')
  checkpoint.Size = Vector3.new(10, 2, 10)
  checkpoint.Position = Vector3.new(0, i * 10, 0)
  checkpoint.Parent = CHECKPOINT_FOLDER
  checkpoint.Touched:Connect(function(hit)
    onTouched(hit, i)
  end)
end

Players.PlayerAdded:Connect(function(player)
  initPlayer(player)
end)

Players.PlayerRemoving:Connect(function(player)
  playerProgress[player.UserId] = nil
end)

print('✅ Obby game loaded')