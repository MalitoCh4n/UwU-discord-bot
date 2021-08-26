
class InteractionHandler {
	constructor (main) {
		this.buttons = new (require('./button'))(main);
		this.messages = new (require('./messageCommands'))(main);
	}
}

module.exports = InteractionHandler;
