
module.exports = {

    name: "help",
    description: "a description of all commands.",
    execute(client, message){

        const Discord = require("discord.js");
        const commands = require("../commands.js")

        let names = [];
        let descriptions = [];
        let helpMessage = "";


        for(var i = 0; i < commands.length; i++){
            
            names.push(commands[i].name);
            descriptions.push(commands[i].description);

        }

        for(var i = 0; i < names.length; i++){
            helpMessage = helpMessage + "m!" + names[i] + " : " + descriptions[i] + " \n";
        }

        let embed = new Discord.MessageEmbed()
            .setTitle(`Commands: `)
            .setColor("#43960C")
            .setDescription(`${helpMessage}`)
            .setFooter("Developed By F4STZ", client.user.avatarURL)
            .setThumbnail()
            .setImage()
                
            message.channel.send({embed});

    }

}