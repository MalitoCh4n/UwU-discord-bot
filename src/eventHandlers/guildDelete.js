

// When guild is deleted
exports.handle = function(guild){
	if(!this.debug) this.logger.decr("guildcount");
}
