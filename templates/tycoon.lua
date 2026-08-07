-- Lemonade.gg Replica - Roblox Game Template
-- Tycoon Game Base Code

local Players = game:GetService('Players')

-- Tycoon Configuration
local BUILDINGS = {
  {
    name = 'Farm',
    cost = 100,
    revenue = 10,
    cooldown = 5
  },
  {
    name = 'Factory',
    cost = 1000,
    revenue = 100,
    cooldown = 3
  },
  {
    name = 'Shop',
    cost = 5000,
    revenue = 500,
    cooldown = 1
  }
}

local playerTycoons = {}

-- Initialize tycoon for player
local function initTycoon(player)
  playerTycoons[player.UserId] = {
    money = 0,
    buildings = {},
    level = 1
  }
end

-- Buy building
local function buyBuilding(userId, buildingIndex)
  local tycoon = playerTycoons[userId]
  local building = BUILDINGS[buildingIndex]
  if tycoon.money >= building.cost then
    tycoon.money = tycoon.money - building.cost
    table.insert(tycoon.buildings, {
      type = building.name,
      revenue = building.revenue,
      nextCollection = tick() + building.cooldown
    })
    return true
  end
  return false
end

-- Collect revenue
local function collectRevenue()
  while true do
    wait(1)
    for userId, tycoon in pairs(playerTycoons) do
      for i, building in ipairs(tycoon.buildings) do
        if tick() >= building.nextCollection then
          tycoon.money = tycoon.money + building.revenue
          building.nextCollection = tick() + 5
        end
      end
    end
  end
end

Players.PlayerAdded:Connect(function(player)
  initTycoon(player)
end)

Players.PlayerRemoving:Connect(function(player)
  playerTycoons[player.UserId] = nil
end)

spawn(collectRevenue)

print('✅ Tycoon game loaded')