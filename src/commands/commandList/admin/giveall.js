

const CommandInterface = require('../../CommandInterface.js');

module.exports = new CommandInterface({

	alias:["giveall"],

	admin:true,

	execute: async function(p){
		let amount = 0;
		if(p.global.isInt(p.args[0]))
			amount = parseInt(p.args[0]);
		else
			return;
		let users = p.global.getids(p.msg.channel.guild.members);
		let sql = "UPDATE IGNORE cowoncy SET money = money + "+amount+" WHERE id IN ("+users+");";
		let result = await p.query(sql);
		p.send("**💎 |** "+p.msg.author.username+" gave @everyone "+amount+" cowoncy!!!");
	}

})
