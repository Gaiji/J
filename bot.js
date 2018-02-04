const Discord = require('discord.js');
const client = new Discord.Client();
const snekfetch = require("snekfetch");

let prefix = '@'

var request = require('request');
client.on('ready', () => {
    console.log('I am ready!');
});

function zero(variable) {
    if (variable === undefined) {
        return 0;
    } else {
        return variable;
    }
}
client.on('message', message => {
    if (message.content.startsWith(prefix + 'stats')) {
    	let args = message.content.split(" ").slice(1);
        let a = args.join(" ");
        var url = 'https://api.mojang.com/users/profiles/minecraft/'+a
	request(url, function(err, response, body) {
            if(!body) {
                return message.reply('指定されたプレイヤーは存在しません');
            }
	    body = JSON.parse(body);
	    let uuid = body.id;
            var url2 = 'http://hypixel.jp:5555/API/'+a+'.html'
            request(url2, function(err, response, body) {
                body = JSON.parse(body);
                message.reply('Test:'+body.ip);
		let rank;
		if (body.rank === "yt") {
                    rank = '0xFFAA00';
		}else if (body.rank === "Developer") {
                    rank = '0x00AAAA';
		}else if (body.rank === "vip") {
                    rank = '0x55FF55';
		}else if (body.rank === "vip+") {
                    rank = '0x55FF55';
		}else if (body.rank === "mvp") {
                    rank = '0x55FFFF';
		}else if (body.rank === "mvp+") {
                    rank = '0x55FFFF';
		}else if (body.rank === "admin") {
                    rank = '0xAA0000';
		}else if (body.rank === "mod") {
                    rank = '0x00AA00
		}else if (body.rank === "helper") {
                    rank = '0x0000AA';
		}else if (body.rank === "nick") {
		    rank = '0xFF00FF';
		}else if (body.rank === "nick+") {
		    rank = '0xFF00FF';
		}else{
		    rank = '0xAAAAAA';
		}
		let embed = new Discord.RichEmbed()
	            .setDescription(a + "'s NNN Server Stats")
		    .addField("Rank", zero(body.rank), true)
	            .setColor(rank)
	            .setThumbnail('https://crafatar.com/avatars/' + (uuid || '') + '?size=100')
	            .setThumbnail('https://crafatar.com/avatars/' + (a || '') + '?size=100');
	        message.channel.sendEmbed(embed);
            });
        });
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
