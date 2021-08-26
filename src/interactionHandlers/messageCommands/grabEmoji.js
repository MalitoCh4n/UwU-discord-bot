

exports.name = "Grab Emojis"

exports.handle = async function (interaction) {
	let content = '';
	const messages = interaction.packet.data.resolved.messages;
	for (let id in messages) {
		const msg = messages[id];
		content += msg.content;
		content += JSON.stringify(msg.embeds);
	}

	interaction.args = [content];
	interaction.command = "emoji";

	this.command.executeInteraction(interaction);
}
