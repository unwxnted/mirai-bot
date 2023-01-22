const images = require("../../images.js");
const embed = require("../normal/embed.js");

module.exports = {

    name: 'ban',
    description: 'ban an user.',
    execute(client, message) {

        const member = message.mentions.members.first();

        if (!member) return embed.execute(client, message, "ERROR", "#AE0028", "Please mention a member", images.ErrorIMAGE);

        if (!message.member.permissions.has("BAN_MEMBERS")) return embed.execute(client, message, "ERROR", "#AE0028", "You Dont have Access to this Action", images.ErrorIMAGE);

        try{
            member.ban().then((member) => {

                return embed.execute(client, message, member.displayName + " Has Been Banned", "#33FF00", member.displayName + " Has Been Banned By " + message.author.username, images.Banned);
    
    
            }).catch(() => {
                return embed.execute(client, message, "ERROR", "#AE0028", "You Dont have Access to this Action", images.ErrorIMAGE);
    
            });
    
        }catch(err){embed.execute(client, message, "ERROR", "#AE0028", "You Dont have Access to this Action", images.ErrorIMAGE);}
        
    }

}