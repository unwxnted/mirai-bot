const Discord = require("discord.js");
const images = require("../../images.js");
const errorEmbed = require("./errorEmbed.js");

module.exports = {

    name:'love',
    description: 'percentage of love between two users.',
    execute(client, message){

        let lovePercent = Math.floor((Math.random() * 100) + 1);
        var loved = message.mentions.members.first();
        let messageOfLove;
        let imageOfLove;

        if(loved){
            if(lovePercent <= 25){
                messageOfLove = "incompatible...";
                imageOfLove = images.incompatible;
            }else if(lovePercent > 25 &&  lovePercent <= 50){
                messageOfLove = "can be friends...";
                imageOfLove = images.canBeFriends;
            }else if(lovePercent  > 50 && lovePercent <= 75){
                messageOfLove = "love compatible!";
                imageOfLove = images.compatible;
            }else if(lovePercent > 75 && lovePercent <= 100){
                messageOfLove = "<3 get married now, your love is so fucking precius <3";
                imageOfLove = images.getMarried;
    
            }
    
            let embed = new Discord.MessageEmbed()
            .setTitle(`Love percent: ${lovePercent}%`)
            .setColor("#FF007F")
            .setDescription(`${loved.displayName} and ${message.author.username} : ${messageOfLove }`)
            .setFooter("Developed By F4STZ", client.user.avatarURL)
            .setThumbnail()
            .setImage(imageOfLove)
                
            message.channel.send({embed});
        
        }else{
            errorEmbed.execute(client, message, "Please mention a member");
        }

    
    }

}