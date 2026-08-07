const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const ROBLOX_SYSTEM_PROMPT = `You are an expert Roblox Luau developer. Generate clean, optimized Luau/Lua code for Roblox games.
Always include comments and follow Roblox best practices.`;

class AIService {
  async generateCode(prompt, gameType = 'custom') {
    try {
      const enhancedPrompt = `Game Type: ${gameType}\n\nRequirement: ${prompt}\n\nGenerate complete, working Roblox Luau code.`;

      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: ROBLOX_SYSTEM_PROMPT },
          { role: 'user', content: enhancedPrompt }
        ],
        temperature: 0.7,
        max_tokens: 2000,
      });

      return {
        code: response.data.choices[0].message.content,
        tokens: response.data.usage.total_tokens,
        success: true
      };
    } catch (error) {
      console.error('AI Generation Error:', error);
      return { code: null, error: error.message, success: false };
    }
  }
}

module.exports = new AIService();