const Discord = require("discord.js");
const client = new Discord.Client();

const {
	prefix,
	token,
} = require('./config.json');

const commands = require("./commands/commands.js")

client.once("ready", () => {
    console.log("ACTIVED");
});

client.once('reconnecting', () => {
	console.log('Reconnecting!');
});

client.once('disconnect', () => {
	console.log('Disconnect!');
});

client.on(("message"), (message) => {
    

    for(var i = 0; i < commands.length; i++){

        if(message.content.startsWith(prefix + commands[i].name)){
            commands[i].execute(client, message);
        }

    }

})

client.login(token);