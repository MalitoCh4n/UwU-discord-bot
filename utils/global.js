
const pub = require('redis').createClient({
  host: process.env.REDIS_HOST,
  password: process.env.REDIS_PASS
});
	
exports.resetBot = async function(){
	pub.publish("endProcess",true);
}
