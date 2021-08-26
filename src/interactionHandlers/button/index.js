
const axios = require('axios');
const requireDir = require('require-dir');
const dir = requireDir('./');

class InteractionHandler {
	constructor (main) {
		this.listeners = {};
		let filename = __filename.slice(__dirname.length + 1, -3);
		for (let listener in dir) {
			if (listener != filename) {
				this.listeners[listener] = dir[listener].handle.bind(main);
			}
		}
	}

	emit (name, data) {
		if (this.listeners[name]) {
			const url = `https://discord.com/api/v8/interactions/${data.id}/${data.token}/callback`
			const ack = () => {
				return axios.post(url, { type: 6 });
			}
			this.listeners[name](data, ack);
		}
	}
}

module.exports = InteractionHandler;
