

exports.handle = function(msg,emoji,userID){
	this.reactionCollector.react(msg, emoji, userID, "remove");
}
