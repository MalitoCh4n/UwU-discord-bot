

// When guild member leaves
exports.handle = function(guild,member){
	this.patreon.left(guild,member);
}
