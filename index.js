const { Client, GatewayIntentBits } = require('discord.js');

// Buat client baru
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Event baru sesuai v15
client.on('clientReady', () => {
  console.log(`Bot online sebagai ${client.user.tag}`);
});

// Login bot
client.login(process.env.TOKEN);
