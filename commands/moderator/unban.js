const Discord = require("discord.js");
const images = require("../../images.js");
const embed = require("../normal/embed.js");

module.exports = {

    name: 'unban',
    description: 'unban a banned user.',
    execute(client, message){

        var args = message.content.toLowerCase().split(" ");

        if(message.member.permissions.has("ADMINISTRATOR")){

            if(parseInt((args[1]))){

                message.guild.members.unban(args[1]).then((member) => {
                        
                    embed.execute(client, message, args[1] + " Has Been Unbanned", "#33FF00", args[1] + " Has Been UnBanned By " + message.author.username, images.unban);


                }).catch(() => {
                    
                    embed.execute(client, message, "ERROR", "#AE0028", `I Can't Find ${args[1]} In The Ban List`, images.ErrorIMAGE);
                        
                });
            
            }else{
                embed.execute(client, message, "ERROR", "#AE0028", "Error, You Have Put a User Id", images.ErrorIMAGE);
                
            }
            
        }else{
            embed.execute(client, message, "ERROR", "#AE0028", "You Dont have Access to this Action", images.ErrorIMAGE);
        }

    }

}