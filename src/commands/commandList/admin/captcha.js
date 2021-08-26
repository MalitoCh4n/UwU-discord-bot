

const CommandInterface = require('../../CommandInterface.js');

const captcha = require('../../../../../tokens/captcha.js');

module.exports = new CommandInterface({

	alias:["captcha"],

	admin:true,
	mod:true,
	dm:true,

	execute: async function(p){
		let {url, text, buffer} = await captcha.gen({}, p.msg.author);
		if (url) {
			p.send(url);
		} else {
			p.send(text,null,{file:buffer,name:"captcha.png"});
		}
	}

})
