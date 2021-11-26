const embed = require("./embed.js");

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

        embed.execute(client, message, `Commands: `, "#43960C", `${helpMessage}`);

    }

}