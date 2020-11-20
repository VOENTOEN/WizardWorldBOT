const discord = require("discord.js");

module.exports.run = async(client, message, args) =>{

    var embed = new discord.MessageEmbed()
        .addfield(name="1.", value="Je bent verantwoordelijk voor je eigen account. (Dit wilt zeggen dat excuses met het was mijn broer, zusje, kat, hond, geest geen geldig excuus zijn.)")
        .addfield(name="2.", value="Je account is op een legale wijze aangemaakt. (Geen cracked, gestolen account)")
        .addfield(name="3.", value="Een ban omzeilen met een ander account is niet toegestaan, vraag netjes een unban aan bij  een admin. ")

    }

module.exports.help = {
    name: "regels"
}