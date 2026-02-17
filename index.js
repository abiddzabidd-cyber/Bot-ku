const { Client, GatewayIntentBits, Events } = require('discord.js');

const client = new Client({ intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildMessages
]});

// Bot siap
client.on('clientReady', () => {
  console.log(`Bot online sebagai ${client.user.tag}`);
  client.user.setActivity('Created by xyliq', { type: 'PLAYING' });
});

// Welcome member baru
client.on(Events.GuildMemberAdd, member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome'); // ganti sesuai nama channel
  if (!channel) return;
  channel.send(`Selamat datang ${member} di server! 🎉`);
});

// Goodbye member keluar
client.on(Events.GuildMemberRemove, member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome'); // ganti sesuai nama channel
  if (!channel) return;
  channel.send(`goodbye ${member.user.tag} `);
});

// Login bot
client.login(process.env.TOKEN);
