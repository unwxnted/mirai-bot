const Discord = require("discord.js");
const images = require("../../images.js");
module.exports = {

    name: "errorMessage",
    description: "send a error message.",
    execute(client, message, string){

        let embed = new Discord.MessageEmbed()
        .setTitle("ERROR")
        .setColor("#AE0028")
        .setDescription(string)
        .setFooter("Developed By F4STZ", client.user.avatarURL)
        .setImage(images.ErrorIMAGE)
        .setThumbnail(message.author.avatarURL)
    
        message.channel.send({embed});

    }


}