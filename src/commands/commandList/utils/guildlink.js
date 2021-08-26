

const CommandInterface = require('../../CommandInterface.js');

module.exports = new CommandInterface({

	alias:["guildlink"],

	args:"",

	desc:"Come join our guild! You might be awarded with special gifts once in awhile!",

	example:[],

	related:["owo link"],

	permissions:["sendMessages","embedLinks"],

	group:["utility"],

	cooldown:5000,
	half:100,
	six:500,

	execute: function(p){
		let text = "**<:owo:816240025942753350> |** Come join our discord to ask for help or just have fun!\n";
		text += "**<:blank:427371936482328596> |** "+p.config.guildlink;
		p.send(text);
	}

})
