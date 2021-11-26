const Discord = require("discord.js");
const images = require("../../images.js");
const embed = require("../normal/embed.js");

module.exports = {

    name: 'ban',
    description: 'ban an user.',
    execute(client, message){

        let member = message.mentions.members.first();
    
        if(member){

            if(message.member.permissions.has("BAN_MEMBERS")){
            

                member.ban().then((member) => {

                    embed.execute(client, message, member.displayName + " Has Been Banned", "#33FF00", member.displayName + " Has Been Banned By " + message.author.username, images.Banned);


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