

exports.handle = async function(main, message){
	if(main.debug) return;
	let {shardID,userID,msg} = JSON.parse(message);
	if (!main.bot.shards.has(shardID)) return;
	main.sender.msgUser(userID,msg);
}
	
