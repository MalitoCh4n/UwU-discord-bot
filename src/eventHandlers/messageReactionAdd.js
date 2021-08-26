

exports.handle = function(msg, emoji, user){
	const userID = user.id || user;
	this.reactionCollector.react(msg, emoji, userID, "add");
}
