import { Client, GatewayIntentBits, Events } from 'discord.js';
import 'dotenv/config';

const client = new Client({ intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildMessages
]});

client.on(Events.ClientReady, () => {
  console.log(`Bot online sebagai ${client.user.tag}`);
  client.user.setActivity('Created by Abid', { type: 'PLAYING' });
});

client.on(Events.GuildMemberAdd, member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
  if (!channel) return;
  channel.send(`Selamat datang ${member} di server! 🎉`);
});

client.on(Events.GuildMemberRemove, member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
  if (!channel) return;
  channel.send(`Sayang banget ${member.user.tag} meninggalkan server 😢`);
});

client.login(process.env.TOKEN);
