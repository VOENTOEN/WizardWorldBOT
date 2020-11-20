const discord = require("discord.js");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async(client, message, args) =>{

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("sorry jij kan dit niet");

    if (!args[0]) return message.reply("Geen gebruiker opgegeven.");
 
    if (!args[1]) return message.reply("Gelieve een redenen op te geven.");

    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("Geen perms");

    var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    var reason = args.slice(1).join(" ");

    if (!warnUser) return message.reply("Kan de gebruiker niet vinden.");

    if(warnUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Je kan geen andere staffleden warnen!");

    if(!warns[warnUser.id]) warns[warnUser.id] = {
        warns: 0
    };

    warns[warnUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) =>{
        if (err) console.log(err);
    });

    var embed = new discord.MessageEmbed()
    .setColor("#ff0000")
    .setFooter(message.member.displayName, message.author.displayAvatarURL)
    .setTimestamp()
    .setDescription(`**Gewarnd:** ${warnUser} (${warnUser.id})
    **Warning door:** ${message.author}
    **Redenen: ** ${reason}`)
    .addField("Aantal warns", warns[warnUser.id].warns);

    var channel = message.member.guild.channels.cache.get("778267096072454184");

    if(!channel) return;

    channel.send(embed);

    if (warns[warnUser.id].warns == 4){

    var embed = new discord.MessageEmbed()
    .setColor("#ff0000")
    .setDescription("Jij moet op passen!")
    .addField("Nog 1 warn en je bent geband!");

        message.reply(embed)
    }

}

module.exports.help = {
    name: "warn"
}