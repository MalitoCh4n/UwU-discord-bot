

const io = require('socket.io-client');

class SocketIo {
	constructor (main) {
		this.main = main;
		this.socket = io(process.env.STREAM_SOCKET, {
			auth: {
				token: process.env.STREAM_TOKEN
			}
		})
		this.socket.on('error', (error) => { console.error('error') });
		this.socket.on('disconnect', (reason) => { console.error('disconnect') });
		this.socket.on('connect', () => { console.error('connected') });
		this.socket.on('connect_error', (error) => { console.error('connect_error') });
	}

	streamEmit (author, key) {
		this.socket.emit('press-key', {
			key,
			user: {
				id: author.id,
				username: author.username,
				discriminator: author.discriminator
			}
		});
	}
	
}

module.exports = SocketIo;
