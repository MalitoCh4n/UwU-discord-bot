

exports.handle = async function (data, ack) {
	await this.socketio.streamEmit(data.member.user, 'b');
	await ack();
}
