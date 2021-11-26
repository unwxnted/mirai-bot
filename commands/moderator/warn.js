const Discord = require("discord.js");
const images = require("../../images.js");
const errorEmbed = require("../normal/errorEmbed.js");

module.exports = {  
    name: 'warn',
    description: 'warn an user.',
    execute(client, message) {

        let member = message.mentions.members.first();

        if(member){

            if(message.member.permissions.has("KICK_MEMBERS")){

                let embed = new Discord.MessageEmbed()
                .setTitle(member.displayName + " Has Been Warned")
                .setColor("#33FF00")
                .setDescription(member.displayName + " is a bad boy...")
                .setFooter("Developed By weakness", client.user.avatarURL)
                .setImage(images.Warn)
            
                message.channel.send({ embeds: [embed] })
    
            }else{
                errorEmbed.execute(client, message, "You Dont have Access to this Action");
            }

        }else{
          errorEmbed.execute(client, message, "Please mention a member");
        }
 
    }

}
