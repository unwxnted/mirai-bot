const Discord = require("discord.js");
const embed = require("./embed.js");
const images = require("../../images.js");

function formatDate(date) {
    return new Intl.DateTimeFormat('en-US').format(date)
}

module.exports = {

    name: "info",
    description: "a message with a user info",
    execute(client, message) {

        const member = message.mentions.members.first();

        if (!member) return embed.execute(client, message, "ERROR", "#AE0028", "Please mention a member", images.ErrorIMAGE);

        const name = member.displayName;
        const joined = formatDate(member.joinedAt);
        const created = formatDate(member.user.createdAt);
        const userTAG = member.user.tag;
        const discriminator = member.user.discriminator;
        const userID = member.user.id;
        const isBOT = member.user.bot;
        const avatarURL = "https://cdn.discordapp.com/avatars/" + member.id + "/" + member.user.avatar + ".jpeg"


        return embed.execute(client, message, `Info of ${name}`, "#43960C", `Name: ${name} \nCreated date: ${created} \nJoined date: ${joined} \nTag: ${userTAG} \nDiscriminator: ${discriminator} \nUser ID: ${userID} \nBot: ${isBOT} \nAvatar: `, avatarURL);

    }
}