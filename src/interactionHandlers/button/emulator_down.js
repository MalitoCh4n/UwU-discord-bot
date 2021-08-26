

exports.handle = async function (data, ack) {
	await this.socketio.streamEmit(data.member.user, 'down');
	await ack();
}
