const Discord = require("discord.js");
const images = require("../../images.js");
const errorEmbed = require("../normal/errorEmbed.js");

module.exports = {

    name: 'kick',
    description: 'kick an user.',
    execute(client, message) {

        let member = message.mentions.members.first();
        
        if(member){

            if(message.member.hasPermission("KICK_MEMBERS")){


                member.kick().then((member) => {

                    let embed = new Discord.MessageEmbed()
                    .setTitle(member.displayName + " Has Been Kicked")
                    .setColor("#33FF00")
                    .setDescription(member.displayName + " Has Been Kicked By " + message.author.username)
                    .setFooter("Developed By F4STZ", client.user.avatarURL)
                    .setImage(images.Kicked)
                    .setThumbnail(message.author.avatarURL)

                    message.channel.send({embed});


                }).catch(() => {
                    errorEmbed.execute(client, message, "AN ERROR HAS HAPPENED");
                });
    
    
            }else{
                errorEmbed.execute(client, message, "You Dont have Access to this Action");
            }
    
        }else{
            errorEmbed.execute(client, message, "Please mention a member");
        }
    }
}