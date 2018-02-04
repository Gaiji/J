const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = '\'

client.on('ready', () => {
    console.log('Ok');
});

client.on('message', message => {
    if (message.content.startsWith(prefix + 'test')) {
    	let args = message.content.split(" ").slice(1);
        let a = args.join(" ")
        var url = 'https://api.mojang.com/users/profiles/minecraft/'+a
        request(url, function(err, response, body) {
            if(!body) {
                return message.reply('指定されたプレイヤーは存在しません');
            }
            body = JSON.parse(body);
            var url2 = 'http://hypixel.jp:5555/API/'+unk+'.html'
            request(url2, function(err, response, body) {
                body = JSON.parse(body);
                message.reply('Test:'+body.ip):
            }
        }
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
