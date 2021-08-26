

const CommandInterface = require('../../CommandInterface.js');

const pongEmoji = "🏓";

module.exports = new CommandInterface({

    alias: ["ping", "pong"],

    args: "",

    desc: "Shows the shard latency in ms",

    example: [],

    related: ["owo stats, owo shard"],

    permissions: ["sendMessages"],

	group:["utility"],

    cooldown: 5000,
    half: 80,
    six: 500,

    execute: async function (p) {
        //query ping from shard
        let ping = p.client.shards.get(p.client.guildShardMap[p.msg.channel.guild.id]).latency;
        let str = (p.command === "ping") ? "pong" : "ping";
        p.send(pongEmoji + " **|** ..."+str+"! In " + ping + "ms");
    }

});
