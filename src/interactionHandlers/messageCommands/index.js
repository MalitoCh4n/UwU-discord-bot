
const axios = require('axios');
const requireDir = require('require-dir');
const dir = requireDir('./');

class InteractionHandler {
	constructor (main) {
		this.listeners = {};
		let filename = __filename.slice(__dirname.length + 1, -3);
		for (let listener in dir) {
			if (listener != filename) {
				const interactionName = dir[listener].name;
				this.listeners[interactionName] = dir[listener].handle.bind(main);
			}
		}
	}

	emit (interaction) {
		if (this.listeners[interaction.command]) {
			this.listeners[interaction.command](interaction);
		}
	}
}

module.exports = InteractionHandler;
