-- Lemonade.gg Replica - Roblox Studio Plugin
-- Main Plugin Entry Point

local plugin = script:FindFirstAncestorWhichIsA('Plugin')
local toolbar = plugin:CreateToolbar('Lemonade')
local button = toolbar:CreateButton('Lemonade Builder', 'Generate Roblox code with AI', 'rbxasset://textures/Cursor.png')

local dockWidgetPluginGui = Instance.new('DockWidgetPluginGui')
dockWidgetPluginGui.Name = 'LemonadeBuilder'
dockWidgetPluginGui.Title = 'Lemonade Builder'
dockWidgetPluginGui.InitialDockState = Enum.InitialDockState.Right
dockWidgetPluginGui.FloatingSize = Vector2.new(400, 600)

local screenGui = Instance.new('ScreenGui')
screenGui.Name = 'LemonadeUI'
screenGui.ResetOnSpawn = false
screenGui.Parent = dockWidgetPluginGui

local title = Instance.new('TextLabel')
title.Name = 'Title'
title.Text = '🍋 Lemonade Builder'
title.TextScaled = true
title.BackgroundColor3 = Color3.fromRGB(102, 126, 234)
title.TextColor3 = Color3.new(1, 1, 1)
title.Size = UDim2.new(1, 0, 0, 40)
title.Parent = screenGui

local promptLabel = Instance.new('TextLabel')
promptLabel.Name = 'PromptLabel'
promptLabel.Text = 'Describe your code:'
promptLabel.BackgroundTransparency = 1
promptLabel.TextXAlignment = Enum.TextXAlignment.Left
promptLabel.Size = UDim2.new(1, -20, 0, 20)
promptLabel.Position = UDim2.new(0, 10, 0, 50)
promptLabel.Parent = screenGui

local promptBox = Instance.new('TextBox')
promptBox.Name = 'PromptBox'
promptBox.PlaceholderText = 'e.g., Create a coin collection system...'
promptBox.MultiLine = true
promptBox.Size = UDim2.new(1, -20, 0, 100)
promptBox.Position = UDim2.new(0, 10, 0, 70)
promptBox.Parent = screenGui

local generateButton = Instance.new('TextButton')
generateButton.Name = 'GenerateButton'
generateButton.Text = '🤖 Generate Code'
generateButton.TextScaled = true
generateButton.BackgroundColor3 = Color3.fromRGB(102, 126, 234)
generateButton.TextColor3 = Color3.new(1, 1, 1)
generateButton.Size = UDim2.new(1, -20, 0, 40)
generateButton.Position = UDim2.new(0, 10, 0, 180)
generateButton.Parent = screenGui

local codeDisplay = Instance.new('TextBox')
codeDisplay.Name = 'CodeDisplay'
codeDisplay.PlaceholderText = 'Generated code will appear here...'
codeDisplay.ReadOnly = true
codeDisplay.MultiLine = true
codeDisplay.Size = UDim2.new(1, -20, 0, 300)
codeDisplay.Position = UDim2.new(0, 10, 0, 230)
codeDisplay.Parent = screenGui

local isOpen = false
button.Click:Connect(function()
  isOpen = not isOpen
  dockWidgetPluginGui.Enabled = isOpen
end)

generateButton.MouseButton1Click:Connect(function()
  local prompt = promptBox.Text
  if prompt == '' then
    codeDisplay.Text = 'Error: Please enter a prompt'
    return
  end
  codeDisplay.Text = 'Connecting to Lemonade API...\n\nAPI Integration coming soon!\nPrompt: ' .. prompt
end)

print('✅ Lemonade Plugin Loaded')