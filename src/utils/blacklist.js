

const config = require('../data/config.json')

const warningEmoji = '⚠️';
let warnedList = {};

exports.checkBot = function (msg) {
	if (warnedList[msg.channel.id]) return true;
	if (msg.author.bot && config.blacklist[msg.author.id]) {
		warnedList[msg.channel.id] = true;
		msg.channel.createMessage(warningEmoji+" **|** OwO! <@"+msg.author.id+"> detected. This bot has copied my code! I will not work until the copycat has been removed from this server!");
	}
}

setInterval(() => {
	warnedList = {};
},600000);
