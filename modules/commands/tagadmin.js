module.exports.config = {
  name: "tagadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.event = function({ api, event }) {
  if (event.senderID !== "100070979951100") {//id bot
    var aid = ["100041661770427","100011426824671"];//id admin(s)
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Tag ad tao làm đéo gì bạn êi🌚","Tag ad tao làm gì đó ??" "Tag ad tao có chuyện gì k ?" "Tag cc ib thẳng mà nói"];//(các) câu bot rep
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  }
