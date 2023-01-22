const Discord = require("discord.js");

module.exports = {

    name: "embedMessage",
    description: "send a embed message.",
    execute(client, message, title, color ,description, image){

        const embed = new Discord.MessageEmbed()
        .setTitle(title)
        .setColor(color)
        .setDescription(description)
        .setFooter("Developed By Unwxnted", client.user.avatarURL)
        .setImage(image)
        .setThumbnail(message.author.avatarURL)
    
        return message.channel.send({ embeds: [embed] })

    }


}