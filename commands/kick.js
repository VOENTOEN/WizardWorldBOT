const discord = require("discord.js");

module.exports.run = async(client, message, args) =>{

    if(!message.member.roles.cache.some(r => r.name === "🏰 | Admin"))
    return;
// Easy way to get member object though mentions.
var member = message.mentions.members.first();
// Kick
member.kick().then((member) => {
    // Successmessage
    message.channel.send(":wave: " + member.displayName + " Is succesvol gekicked :point_right: https://gfycat.com/thornyslimycormorant ");
}).catch(() => {
    // Failmessage
    message.channel.send("Geannuleerd.");
});
}


module.exports.help = {
    name: "kick"
}