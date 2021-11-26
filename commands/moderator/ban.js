const Discord = require("discord.js");
const images = require("../../images.js");
const errorEmbed = require("../normal/errorEmbed.js");

module.exports = {

    name: 'ban',
    description: 'ban an user.',
    execute(client, message){

        let member = message.mentions.members.first();
    
        if(member){

            if(message.member.permissions.has("BAN_MEMBERS")){
            

                member.ban().then((member) => {

                    let embed = new Discord.MessageEmbed()
                    .setTitle(member.displayName + " Has Been Banned")
                    .setColor("#33FF00")
                    .setDescription(member.displayName + " Has Been Banned By " + message.author.username)
                    .setFooter("Developed By weakness", client.user.avatarURL)
                    .setImage(images.Banned)
                    .setThumbnail(message.author.avatarURL)

                    message.channel.send({ embeds: [embed] })



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