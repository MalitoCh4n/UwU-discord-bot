

var timer;

exports.handle = async function(main, message){
	if(timer){
		clearTimeout(timer);
		delete timer;
	}
	let time = main.clusterID*100000;
	console.log("ending "+main.clusterID+" in "+time+"ms");
	timer = setTimeout(function(){
		process.exit(0);
	},time);
}

