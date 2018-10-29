const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
if (message.content.startsWith("suggestion")) {
let sender = message.author;
let suggestion = args.slice(0).join(" ");
if(!suggestion) return message.channel.send("You didn't give any suggestion... Mistake?");
if(!args[2]) return message.channel.send("That suggestion is a bit short, isn't it? Try making it a little longer");

let bugEmbed = new Discord.RichEmbed()
.setTitle("**A suggestion was made!**")
.setDescription(`This suggestion was made by ${sender}`)
.setTimestamp()
.setAuthor(sender.tag)
.addField("**The suggestion is**", suggestion)
.addField("Also want to give a suggestion?", "Use the !suggestion command, aliases: suggest")
.setColor("#FFF000");
let suggestionChannel = message.guild.channels.find(c => c.name === "bug-suggestions-reports");

suggestionChannel.send(bugEmbed).then(message => {
	message.react("👍") 
	message.react("👎")
});
message.channel.send("The suggestion was made, our developer team will look into it soon!").then(message => message.delete(100000));
})
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

