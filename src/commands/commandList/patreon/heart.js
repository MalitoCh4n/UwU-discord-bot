

const CommandInterface = require('../../CommandInterface.js');

const emoji = "<a:smokeheart:867260411680915456>";
const owner = "384202884553768961";
const data = "smokeheart";
const plural = "smoke hearts";

module.exports = new CommandInterface({

	alias:["heart", "smokeheart"],

	args:"{@user}",

	desc:"Give two smoke hearts to someone! You can only gain one if you receive it! This command was created by ?"+owner+"?",

	example:[],

	related:[],

	permissions:["sendMessages"],

	group:["patreon"],

	cooldown:30000,
	half:80,
	six:400,
	bot:true,

	execute: async function(p){
		if(p.args.length==0){
			display(p);
			p.setCooldown(5);
		}else{
			let user = p.getMention(p.args[0]);
			if(!user){
				user = await p.fetch.getMember(p.msg.channel.guild,p.args[0]);
				if(!user){
					p.errorMsg(", Invalid syntax! Please tag a user!",3000);
					p.setCooldown(5);
					return;
				}
			}
			if(user.id==p.msg.author.id){
				p.errorMsg(", You cannot give it to yourself!!",3000);
				p.setCooldown(5);
				return;
			}
			give(p,user);
		}
	}
});

async function display(p){
	let count = await p.redis.hget("data_"+p.msg.author.id, data);
	if(!count) count = 0;

	p.replyMsg(emoji, ", you currently have "+count+" "+plural+"!");
}

async function give(p,user){
	if(p.msg.author.id!=owner){
		let result = await p.redis.hincrby("data_"+p.msg.author.id, data, -1);

		// Error checking
		if(result==null||result<0){
			if(result<0) p.redis.hincrby("data_"+p.msg.author.id, data, 1);
			p.errorMsg(", you do not have any smoke hearts to give! >:c",3000);
			p.setCooldown(5);
			return;
		}
	}

	await p.redis.hincrby("data_"+user.id, data, 2);
	p.send(`${emoji} **| ${p.msg.author.username}** sent ${user.username} 2 smoke hearts!`);
}
