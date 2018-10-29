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
       let reportchannel = message.guild.channels.find(c => c.name === "logging");
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
        
         if (cmd == 'help') {
         message.delete().catch();
              
       var everyonecommand = new Discord.RichEmbed()
       .setTitle('Command List - Everyone')
         .setDescription('Commands That Everyone Can User')
         .addField(`${prefix}help`, `Shows list of commands`)
       var admincommand = new Discord.RichEmbed()
       .setTitle('Command List - Administators')
         .setDescription('Commands That Only Administrators Can Use')
         .addField(`${prefix}warn`, `Warns a user!`)
        .addField(`${prefix}dm`, `Sends Private Message to users - Used For Support Tickets`)
        message.channel.sendEmbed(everyonecommand)
             message.channel.sendEmbed(admincommand)
}
        
         if (cmd == 'dm') {
         message.delete().catch();
      
          if (!message.member.hasPermission(['KICK_MEMBERS'])) message.channel.sendEmbed(permdenyEmbed);;
           let mUser = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
         if(!mUser) return message.reply("Couldn't find that user!")
         let dmMsg = args.join(" ").slice(22);
         mUser.send(`${dmMsg}`);
      
         
         
      
       
 
}
}   
}
});

client.login(process.env.BOT_TOKEN);
