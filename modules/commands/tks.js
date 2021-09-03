const fs = require("fs");
module.exports.config = {
name: "cảm ơn",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "cảm ơn",
	commandCategory: "Other",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("cảm ơn")==0 || (event.body.indexOf("cảm ơn")==0)) {
		var msg = {
				body: "thanks cái lồn mẹ mày",
				attachment: fs.createReadStream(__dirname + `/noprefix/tks.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}ent, __GLOBAL }) {

}