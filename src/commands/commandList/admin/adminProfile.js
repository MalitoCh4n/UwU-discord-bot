

const CommandInterface = require('../../CommandInterface.js');

const profileUtil = require('../social/util/profileUtil.js');
const imagegenAuth = require('../../../../../tokens/imagegen.json');

module.exports = new CommandInterface({

	alias:["adminprofile"],

	admin:true,
	mod:true,
	dm:true,

	execute: async function(p){
		if (p.global.isUser(p.args[0]) || p.global.isInt(p.args[0])) {
			let user = p.args[0].match(/[0-9]+/)[0];
			user = await p.fetch.getUser(user);
			if(!user) {
				p.errorMsg(", I couldn't find that user!",3000);
			} else {
				await profileUtil.displayProfile(p, user);
			}
		} else {
			p.errorMsg(", invalid arguments! Please tag a user");
		}
	}
})

