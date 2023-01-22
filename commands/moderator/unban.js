const images = require("../../images.js");
const embed = require("../normal/embed.js");

module.exports = {

    name: 'unban',
    description: 'unban a banned user.',
    execute(client, message) {

        const args = message.content.toLowerCase().split(" ");

        if (!message.member.permissions.has("ADMINISTRATOR")) return embed.execute(client, message, "ERROR", "#AE0028", "You Dont have Access to this Action", images.ErrorIMAGE);

        if (!parseInt((args[1]))) return embed.execute(client, message, "ERROR", "#AE0028", "Error, You Have Put a User Id", images.ErrorIMAGE);


        try {
            message.guild.members.unban(args[1]).then((member) => {

                return embed.execute(client, message, args[1] + " Has Been Unbanned", "#33FF00", args[1] + " Has Been UnBanned By " + message.author.username, images.unban);


            }).catch(() => {

                return embed.execute(client, message, "ERROR", "#AE0028", `I Can't Find ${args[1]} In The Ban List`, images.ErrorIMAGE);

            });

        } catch (err) { return embed.execute(client, message, "ERROR", "#AE0028", "505 SOMETHING WENT WRONG", images.ErrorIMAGE); }
    }
}