

// When guild is available
exports.handle = function(guild){
	if(!this.debug) this.logger.incr("guildcount");
}
