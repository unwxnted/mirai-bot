const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

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