

const CommandInterface = require('../../CommandInterface.js');

const diceEmoji = '🎲';
const msgs = ["I choose ?!","I like ?!","I love ?!","? is the best choice","definitely ?!","? 100%"];

module.exports = new CommandInterface({

	alias:["choose", "pick", "decide"],

	args:"{item1} | {item2} | ...",

	desc:"Let me decide a random option from a list of items! This command was created by PandaDasKissen",

	example:["owo pick dog | cat | mouse"],

	related:[],

	permissions:["sendMessages"],

	group:["fun"],

	cooldown:5000,
	half:80,
	six:400,

	execute: async function(p){
		if(p.args.length==0){
			p.errorMsg(", invalid arguments! Please include a list of items!",3000);
			return;
		}

		let items = p.args.join(" ").replace(/[,;]/gi,'|').split('|');

		if(items.length==1){
			p.errorMsg(", you silly!  I can't just choose from one item!",3000);
				return;
		}

		let item = items[Math.floor(Math.random()*items.length)];
		let msg = ', '+msgs[Math.floor(Math.random()*msgs.length)].replace('?','**'+item+'**');
		p.replyMsg(diceEmoji,p.replaceMentions(msg));
	}
});
