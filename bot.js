const Discord = require('discord.js');

const client = new Discord.Client();

    function changing_status() {
        let status = ['!help | Prefix: !', 'under development!', 'utbot.wadj.ga', 'NEW: Set log channel!', 'Alpha thing', `${client.users.size} users!`, `on ${client.guilds.size} servers`]
        let random = status[Math.floor(Math.random() * status.length)]
        client.user.setActivity(random)
      }

client.on('ready', () => {

  
    console.log(`${client.user.username} Has Been Started`);

});








client.on('message', async message => {
    
    let prefix = process.env.BOT_PREFIX;
   
    
    let args = message.content.slice(prefix.length).trim().split(' ');
    
    
    let cmd = args.shift().toLowerCase();
    
    
    if (message.channel.type == "dm") {
       
        console.log(`${message.author.tag} Said ${message.content}`);
        
    }
   
if (message.channel.type == "text") {
    var permdenyEmbed = new Discord.RichEmbed()
.setColor('#ff4d4d')
 .setDescription(`<@${message.author.id}>, Sorry, you don't meet the permission level for this command!`)
.setTitle('Permission Denied!')
    
    var noMention = new Discord.RichEmbed()
.setColor('#ff4d4d')
 .setDescription(`<@${message.author.id}>, The User that you mentioned was not found!`)
.setTitle('User Not Found!')
    
   
        
         
   function function1() {
    message.delete(0)
}
 
    if (message.author.id == 505792031898206209) {
       
       setTimeout(function1, 3000);
      
    }
  
    
    if (message.content.startsWith(prefix))  {
   // if (cmd == 'ping') {
      // message.delete().catch();
       // if (!message.member.hasPermission(['MANAGE_GUILD'])) return message.channel.sendEmbed(permdenyEmbed);
       // metion = message.mentions.users.first();
       // if (metion == null) return message.reply("You didin't mention anyone!");
      // //authername = message.author.Username
       // message.reply("Message Sent!");
       // metion.send(message.author.username +' Has Pinged You!');
 
// }
     if (cmd == 'warn') {
         
         message.delete().catch();
       let reportchannel = message.guild.channels.find(c => c.name === "logs");
          if (!message.member.hasPermission(['KICK_MEMBERS'])) return message.channel.sendEmbed(permdenyEmbed);
         let mUser = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
         if(!mUser) return message.reply("Couldn't find that user!");
         let dmMsg = args.join(" ").slice(22);
         mUser.send(`You have been warned for ${dmMsg}`);
        
           var SuccessWarn = new Discord.RichEmbed()
.setColor('#99ff66')
 .setDescription(`${mUser.username} Has been warned!`)
.setTitle('User Has Been Warned!')
         
         var warnlogembbed = new Discord.RichEmbed()
         .setDescription('Warning')
         .addField(`this is a test`, `this is a test`)
         .addField("fisrst value", "secound value")
         .setColor('#edc607')
         message.channel.sendEmbed(SuccessWarn);
          reportchannel.sendEmbed(warnlogembbed);
      
       
 
}
        if (cmd == 'suggestion') {
	message.delete().catch();
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
	let suggestionChannel = message.guild.channels.find(c => c.name === "submitted-suggestion");

	suggestionChannel.sendEmbed(bugEmbed)
	message.channel.send("Thank you for telling us this suggestion! We will take a look and take it into consideration!").then(message => message.delete(100000));
            
        }

         if (cmd == 'dm') {
         message.delete().catch();
      
          if (!message.member.hasPermission(['KICK_MEMBERS'])) message.channel.sendEmbed(permdenyEmbed);;
           let mUser = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
         if(!mUser) return message.reply("Couldn't find that user!")
         let dmMsg = args.join(" ").slice(22);
         mUser.send(`${dmMsg}`);
}


      if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
         
     if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }    
      
       
 

}   
}
});

client.login(process.env.BOT_TOKEN);
