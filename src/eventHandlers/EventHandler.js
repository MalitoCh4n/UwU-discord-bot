

const requireDir = require('require-dir');
const dir = requireDir('./');

class EventHandler{
	constructor(main){
		let filename = __filename.slice(__dirname.length + 1, -3);
		for(let listener in dir){
			if(listener!=filename)
				main.bot.on(listener,dir[listener].handle.bind(main));
		}
	}
}

module.exports = EventHandler;
