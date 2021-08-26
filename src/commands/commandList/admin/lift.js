

const CommandInterface = require('../../CommandInterface.js');

module.exports = new CommandInterface({

	alias:["lift"],

	admin:true,
	mod:true,
	dm:true,

	execute: async function(p){
		let time;
		let hasTime = false;
		if(p.args[1] && p.global.isInt(p.args[1])){
			time = parseInt(p.args[1]);
			hasTime = true
		}else if(p.args[1]){
			p.errorMsg(", Wrong time format");
			return;
		}

		if(!p.global.isUser("<@"+p.args[0]+">")){
			p.errorMsg(", Invalid user id");
			return;
		}
		let sql = "UPDATE IGNORE timeout SET penalty = 0"+(hasTime ? ", prev_penalty = "+time : "")+" WHERE id = "+p.args[0]+";";
		let result = await p.query(sql);

		if(user = await p.sender.msgUser(p.args[0],"**🙇 |** Your penalty has been lifted by an admin! Sorry for the inconvenience!")){
			if (user.dmError) {
				p.send("⚠ **|** Penalty has been set to 0 for "+user.username+", I couldn't DM them.");
			}
			else {
				p.send("Penalty has been set to 0 for "+user.username);
			}
		}
			
		else if(guild = await p.fetch.getGuild(p.args[0]))
			p.send("Penalty has been set to 0 for guild: "+guild.name);
		else
			p.send("Failed to set penalty for that user");
	}

})
