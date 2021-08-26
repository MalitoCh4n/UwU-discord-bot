

const CommandInterface = require('../../CommandInterface.js');

module.exports = new CommandInterface({

	alias:["addannouncement"],

	admin:true,
	dm:true,

	execute: async function(p){
		try{
			let url = p.args[0];
			let data = await p.DataResolver.urlToBuffer(url);
			await p.send("This is a test message! Does it look ok?",null,{file:data,name:"announcement.png"});
			let sql = "INSERT INTO announcement (url) VALUES (?)";
			await p.query(sql,[url]);
			await p.send("Added new announcement!");
		}catch(err){
			p.errorMsg(", failed to add announcement");
		}
	}

})
