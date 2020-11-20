const discord = require("discord.js");

module.exports.run = async(client, message, args) =>{

    var embed = new discord.MessageEmbed()
    .setTitle("Jouw account")
    .setColor("#ff0000")
    .addField("1. Je bent verantwoordelijk voor je eigen account. (Dit wilt zeggen dat excuses met het was mijn broer, zusje, kat, hond, geest geen geldig excuus zijn.)");
    
    channel.send(embed);
}

module.exports.help = {
    name: "regels"
}