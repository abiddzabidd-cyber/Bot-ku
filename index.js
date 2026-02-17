import { Client, GatewayIntentBits, Events } from 'discord.js';
import 'dotenv/config';

// Hanya intents dasar supaya bot ga crash
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds
  ]
});

// Saat bot siap
client.on(Events.ClientReady, () => {
  console.log(`Bot online sebagai ${client.user.tag}`);

  // Status / deskripsi bot
  client.user.setActivity('Created by | Xyliq', { type: 'PLAYING' });
});

// Login bot pakai token
client.login(process.env.TOKEN);
