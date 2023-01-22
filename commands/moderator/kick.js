const images = require("../../images.js");
const embed = require("../normal/embed.js");

module.exports = {

    name: 'kick',
    description: 'kick an user.',
    execute(client, message) {

        const member = message.mentions.members.first();

        if (!member) return embed.execute(client, message, "ERROR", "#AE0028", "Please mention a member", images.ErrorIMAGE);

        if (!message.member.permissions.has("KICK_MEMBERS")) return embed.execute(client, message, "ERROR", "#AE0028", "You Dont have Access to this Action", images.ErrorIMAGE);

        try{
            member.kick().then((member) => {
                return embed.execute(client, message, member.displayName + " Has Been Kicked", "#33FF00", member.displayName + " Has Been Kicked By " + message.author.username, images.Kicked);
    
            }).catch(() => {
                return embed.execute(client, message, "ERROR", "#AE0028", "You Dont have Access to this Action", images.ErrorIMAGE);
    
            });
        }catch(err){return embed.execute(client, message, "ERROR", "#AE0028", "505 SOMETHING WENT WRONG", images.ErrorIMAGE);}
        
    }
}