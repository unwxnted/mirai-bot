const Discord = require("discord.js");


module.exports = {

    name:'ping',
    description: 'pong!',
    execute(client, message){

        message.channel.send("Pong!");

    }

}