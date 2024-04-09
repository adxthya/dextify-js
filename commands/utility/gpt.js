const { SlashCommandBuilder } = require("discord.js");
const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: "anything",
  baseURL: "http://localhost:3040/v1",
});

module.exports = {
  data: new SlashCommandBuilder()
    .setName("gpt")
    .setDescription("Answers to your questions")
    .addStringOption((option) =>
      option.setName("query").setDescription("Query").setRequired(true)
    ),
  async execute(interaction) {
    const query = interaction.options.getString("query");
    await interaction.deferReply();
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    const reply = chatCompletion.choices[0].message.content;
    await interaction.editReply(`Query: ${query}\n\nReponse: ${reply}`);
  },
};
