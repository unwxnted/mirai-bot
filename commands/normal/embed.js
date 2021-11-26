const Discord = require("discord.js");
const images = require("../../images.js");
module.exports = {

    name: "embedMessage",
    description: "send a embed message.",
    execute(client, message, title, color ,description, image){

        let embed = new Discord.MessageEmbed()
        .setTitle(title)
        .setColor(color) // verde: #43960C rojo: #AE0028
        .setDescription(description)
        .setFooter("Developed By weakness", client.user.avatarURL)
        .setImage(image)
        .setThumbnail(message.author.avatarURL)
    
        message.channel.send({ embeds: [embed] })

    }


}