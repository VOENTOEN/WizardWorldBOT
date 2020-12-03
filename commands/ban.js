const discord = require("discord.js");

module.exports.run = async(client, message, args) =>{

    if(!message.member.roles.cache.some(r => r.name === "🏰 | Admin"))
    return;

// Easy way to get member object though mentions.
var member = message.mentions.members.first();
// ban
member.ban().then((member) => {
    // Successmessage
    message.channel.send(":wave: " + member.displayName + " is succesvol geband https://gfycat.com/carefreeheartyhoopoe :point_right: ");
}).catch(() => {
    // Failmessage
    message.channel.send("geannuleerd");
});
}

module.exports.help = {
    name: "ban"
}