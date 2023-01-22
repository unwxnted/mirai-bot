module.exports = {

    name: "say",
    description: "say command",
    execute(client, message){

        var args = message.content.toLowerCase().split(" ");
        var say = "";

        for (var i = 1; i < args.length; i++){
            say = say + " " + args[i];
        }
        
        return message.channel.send(say);

    }

}