

const CommandInterface = require('../../CommandInterface.js');

const delay = 30000;

module.exports = new CommandInterface({

	alias:["resetbot","restartbot"],

	admin:true,
	dm:true,

	execute: function(p){
		p.send("Restarting all shards");
		p.pubsub.publish("endProcess");
	}

})
