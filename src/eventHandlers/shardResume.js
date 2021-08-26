

// Fired when a shard resumes
exports.handle = function(id){
	console.log('['+id+']--------------- Bot has resumed ---------------');
	if(!this.debug) this.logger.incr("reconnecting");
}
