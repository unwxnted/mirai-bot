const Discord = require("discord.js");
const images = require("../../images.js");
const embed = require("../normal/embed.js");

module.exports = {

    name: 'kick',
    description: 'kick an user.',
    execute(client, message) {

        let member = message.mentions.members.first();
        
        if(member){

            if(message.member.permissions.has("KICK_MEMBERS")){


                member.kick().then((member) => {

                    embed.execute(client, message, member.displayName + " Has Been Kicked", "#33FF00", member.displayName + " Has Been Kicked By " + message.author.username, images.Kicked);

                }).catch(() => {
                    embed.execute(client, message, "ERROR", "#AE0028", "You Dont have Access to this Action", images.ErrorIMAGE);

                });
    
    
            }else{
                embed.execute(client, message, "ERROR", "#AE0028", "You Dont have Access to this Action", images.ErrorIMAGE);

            }
    
        }else{
            embed.execute(client, message, "ERROR", "#AE0028", "Please mention a member", images.ErrorIMAGE);

        }
    }
}