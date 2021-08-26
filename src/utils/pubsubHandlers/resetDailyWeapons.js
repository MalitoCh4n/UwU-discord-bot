

const dailyWeaponUtil = require('../../commands/commandList/battle/util/dailyWeaponUtil.js');

exports.handle = async function(main, message){
	if(main.debug) return;
	let {shardID} = JSON.parse(message);
	if (!main.bot.shards.has(shardID)) return;
	await dailyWeaponUtil.resetDailyWeapons();
}
	
