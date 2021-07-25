const Discord = require("discord.js");


module.exports = {

    name:'invite',
    description: 'send a valid discord bot invite',
    execute(client, message){

        message.channel.send("link: https://discord.com/api/oauth2/authorize?client_id=736658732079120434&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.com%2Fapi%2Foauth2%2Fauthorize%3Fclient_id%3D736658732079120434%26permissions%3D8%26redirect_uri%3Dhttps%253A%252F%252Fdiscordapp.com%252Foauth2%252Fauthorize%253F%2526736658732079120434&scope=bot");

    }

}