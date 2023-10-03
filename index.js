const OpenAI = require('openai')
const runCall = async (input) => {
  const openai = new OpenAI({
    apiKey: process.env["OPENAI_API_KEY"]
  });
  const chatCompletion = await openai.chat.completions.create({
    messages: input.messages || [{ role: 'user', content: input.question }],
    model: input.model || 'gpt-3.5-turbo',
  });
  console.log(chatCompletion.choices[0]);
  return chatCompletion.choices[0]
}

module.exports = runCall
