const Discord = require('discord.js');

const client = new Discord.Client();



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
   function function1() {
    message.delete(0)
}
 
    if (message.author.id == 505792031898206209) {
       
       setTimeout(function1, 3000);
      
    }
   if (cmd === `${prefix}ping`) {
      message.delete().catch();
       if (!message.member.hasPermission(['MANAGE_GUILD'])) return message.reply("You don't have enough permission to do that!");
       metion = message.mentions.users.first();
       if (metion == null) return message.reply("You didin't mention anyone!");
      //authername = message.author.Username
       message.reply("Message Sent!");
       metion.send(message.author.username +' Has Pinged You!');
 
}
     if (cmd === `${prefix}warn`) {
         message.delete().catch();
        
          if (!message.member.hasPermission(['KICK_MEMBERS'])) return message.reply("You don't have enough permission to do that!");
         let mUser = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
         if(!mUser) return message.reply("Couldn't find that user!")
         let dmMsg = args.join(" ").slice(22);
         mUser.send(`You have been warned for ${dmMsg}`);
         let warnlogembbed = new Discord.RichEmbed()
         .setDescription('Warning')
         .addField(`this is a test`, `this is a test`)
          message.channel.send(warnlogembbed);
      
       
 
}
    }
});



// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);

