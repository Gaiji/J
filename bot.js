const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = '\'

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content.startsWith(prefix + 'ping')) {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);