const { SlashCommandBuilder } = require("discord.js");
const {
  joinVoiceChannel,
  VoiceConnectionStatus,
  createAudioPlayer,
  createAudioResource,
  getVoiceConnection,
} = require("@discordjs/voice");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("play")
    .setDescription("Connects to a voice channel and plays a song"),
  async execute(interaction) {
    // Establishing connection
    const connected = getVoiceConnection(interaction.guild.id);
    if (!connected) {
      const connection = joinVoiceChannel({
        channelId: "1087782219722010694",
        guildId: interaction.guild.id,
        adapterCreator: interaction.guild.voiceAdapterCreator,
      });

      //Providing response
      connection.on(VoiceConnectionStatus.Ready, () => {
        interaction.reply({
          content: "Connected to voice channel music!",
          ephemeral: true,
        });
      });
      // Playing an audio
      const resource = createAudioResource(
        "/home/adithya/Desktop/Projects/Web-development/dextify-js/song.mp3"
      );
      const player = createAudioPlayer();
      player.play(resource);
      connection.subscribe(player);
    } else {
      interaction.reply("Already playing a song.");
    }
  },
};
