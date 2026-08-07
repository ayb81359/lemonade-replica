-- Lemonade.gg Replica - Roblox Game Template
-- Simulator Game Base Code

local Players = game:GetService('Players')
local DataStoreService = game:GetService('DataStoreService')

-- Game Configuration
local CONFIG = {
  resourceName = 'Coins',
  gainPerSecond = 1,
  upgradeMultiplier = 1.5,
  saveCooldown = 5
}

local playerStats = {}

-- Initialize player
local function initPlayer(player)
  playerStats[player.UserId] = {
    coins = 0,
    multiplier = 1,
    totalEarned = 0,
    lastSave = tick()
  }
end

-- Main earning loop
local function earningLoop()
  while true do
    wait(1)
    for userId, stats in pairs(playerStats) do
      local earned = CONFIG.gainPerSecond * stats.multiplier
      stats.coins = stats.coins + earned
      stats.totalEarned = stats.totalEarned + earned
    end
  end
end

Players.PlayerAdded:Connect(function(player)
  initPlayer(player)
end)

Players.PlayerRemoving:Connect(function(player)
  playerStats[player.UserId] = nil
end)

spawn(earningLoop)

print('✅ Simulator game loaded')