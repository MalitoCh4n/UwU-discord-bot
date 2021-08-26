

exports.handle = async function(main, message){
	let {channelID,msg} = JSON.parse(message);
	if(!main.bot.channelGuildMap[channelID]) return;
	main.bot.createMessage(channelID,msg);
}
	
