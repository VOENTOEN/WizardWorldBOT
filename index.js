const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");
 
const client = new discord.Client();
client.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if(jsFiles.length <=0) {
    console.log("Geen files gevonden!")
    return;
    }

    jsFiles.forEach((f,i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen!`);

        client.commands.set(fileGet.help.name, fileGet);

    })



});


client.on("gui", member =>{

    var role = member.guild.roles.cache.get('777554169766346783');

    if(!role) return;

    member.roles.add(role);

    var channel = member.guild.channels.cache.get('777156673990819861');

    if(!channel) return;

    channel.send(`Welkom op ${member} op ✨**WizardWorld**✨`)

});

client.login(process.env.token);
 
client.on("ready", async () => {
 
    console.log(`${client.user.username} is online.`);
 
    client.user.setActivity("play.NordMT.nl", { type: "PLAYING" });
 
});



 
 
client.on("message", async message => {
 
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];

    var arguments = messageArray.slice(1);

    var commands = client.commands.get(command.slice(prefix.length));

    if(commands) commands.run(client, message, arguments);


    if (command === `${prefix}test`) {
 
        return message.channel.send("het werkt");
    
    }

    if (message.channel.id === '779059886679916554') {
        if(isNaN(message.content)) {
            message.delete();
            
        }
    }



});