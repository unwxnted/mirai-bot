const images = require("../../images.js");
const embed = require("../normal/embed.js");

module.exports = {
    name: 'warn',
    description: 'warn an user.',
    execute(client, message) {

        const member = message.mentions.members.first();

        if (!member) return embed.execute(client, message, "ERROR", "#AE0028", "Please mention a member", images.ErrorIMAGE);

        if (message.member.permissions.has("KICK_MEMBERS")) return embed.execute(client, message, "ERROR", "#AE0028", "You Dont have Access to this Action", images.ErrorIMAGE);

        return embed.execute(client, message, member.displayName + " Has Been Warned", "#33FF00", member.displayName + " is a bad boy...", images.Warn);
    }

}
