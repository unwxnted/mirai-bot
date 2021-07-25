const Discord = require("discord.js");
const images = require("../../images.js");
const errorEmbed = require("../normal/errorEmbed.js");

module.exports = {

    name: 'unban',
    description: 'unban a banned user.',
    execute(client, message){

        var args = message.content.toLowerCase().split(" ");

        if(message.member.hasPermission("ADMINISTRATOR")){

            if(parseInt((args[1]))){

                message.guild.members.unban(args[1]).then((member) => {
                        
                    let embed = new Discord.MessageEmbed()
                    .setTitle(args[1] + " Has Been Unbanned")
                    .setColor("#33FF00")
                    .setDescription(args[1] + " Has Been UnBanned By " + message.author.username)
                    .setFooter("Developed By F4STZ", client.user.avatarURL)
                    .setImage(images.unban) 
                    .setThumbnail(message.author.avatarURL)

                    message.channel.send({embed});

                }).catch(() => {
                    
                    errorEmbed.execute(client, message, `I Can't Find ${args[1]} In The Ban List`);
                        
                });
            
            }else{

                errorEmbed.execute(client, message, "Error, You Have Put a User Id");
            }
            
        
        }else{
            errorEmbed.execute(client, message, "You Dont have Access to this Action");
        }

    }

}