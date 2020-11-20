const discord = require("discord.js");

module.exports.run = async(client, message, args) =>{

    

     // Vang het idee op.
     var idee = args.join(" ");
 
     // Kijk na als er een idee is meegegeven.
     if (!idee) return message.channel.send("Geef een suggestie mee");
  
     // Maak het embed aan.
     var ideeEmbed = new discord.MessageEmbed()
         .setTitle("Nieuwe suggestie!")
         .setColor("#00FF00")
         .addField("Suggestie: ", idee)
         .addField("Van: ", message.author);
  
     // Vind het kanaal.
     var ideeChannel = message.member.guild.channels.cache.get("777176129131249674");
     if (!ideeChannel) return message.reply("Kan het kanaal niet vinden");
  
     // Verzend het bericht en voeg er reacties aan toe.
     ideeChannel.send(ideeEmbed).then(embedMessage => {
         embedMessage.react('👍');
         embedMessage.react('👎');
     });

    }

module.exports.help = {
    name: "suggestie"
}