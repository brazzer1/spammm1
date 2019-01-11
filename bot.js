const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("533384304609460237")
setInterval(function() {
channel.send(`movebi`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
