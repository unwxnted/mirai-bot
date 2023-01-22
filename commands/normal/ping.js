module.exports = {

    name:'ping',
    description: 'pong!',
    execute(client, message){

        return message.channel.send("Pong!");

    }

}