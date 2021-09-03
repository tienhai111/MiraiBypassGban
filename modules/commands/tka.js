const fs = require("fs");
module.exports.config = {
name: "tha",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "tha",
	commandCategory: "Other",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("tha")==0 || (event.body.indexOf("tha")==0)) {
		var msg = {
				body: "tka cái lồn mẹ mày ngu đéo biết tiếng việt à",
				attachment: fs.createReadStream(__dirname + `/noprefix/tka.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}ent, __GLOBAL }) {

}