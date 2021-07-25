const Discord = require("discord.js");
const errorEmbed = require("./errorEmbed.js");

function formatDate(date) {
    return new Intl.DateTimeFormat('en-US').format(date)
}

module.exports = {

    name: "info",
    description: "a message with a user info",
    execute(client, message){

        const member = message.mentions.members.first();

        if(member){
            
            // member info variables

            const name = member.displayName;
            const joined = formatDate(member.joinedAt);
            const created = formatDate(member.user.createdAt);
            const userTAG = member.user.tag;
            const discriminator = member.user.discriminator;
            const userID = member.user.id;
            const isBOT = member.user.bot;
            const avatarURL = "https://cdn.discordapp.com/avatars/"+member.id+"/"+member.user.avatar+".jpeg"

            const presenceGame = "No presence game.";
            if(member.user.presence.game){
                const presenceGame = member.user.presence.game.name;
            }
                
        
            const embed = new Discord.MessageEmbed()
            .setTitle(`Info of ${name}`)
            .setColor("#43960C")
            .setDescription(`Name: ${name} \nCreated date: ${created} \nJoined date: ${joined} \nTag: ${userTAG} \nDiscriminator: ${discriminator} \nUser ID: ${userID} \nBot: ${isBOT} \nPresence Game: ${presenceGame} \nAvatar: `)
            /*.addField(`name: ${name}`)
            .addField(`created date: ${created}`)
            .addField(`joined date: ${joined}`)
            .addField(`roles: ${roles}`)
            .addField(`avatar: `)*/
            .setImage(avatarURL)
            .setFooter("Developed By F4STZ")
            
            message.channel.send(embed);
        
        }else{
            errorEmbed.execute(client, message, "Please mention a member");
        }

        

    }
}