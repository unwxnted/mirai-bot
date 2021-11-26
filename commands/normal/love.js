const Discord = require("discord.js");
const images = require("../../images.js");
const embed = require("./embed.js");

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
    
            embed.execute(client, message, `Love percent: ${lovePercent}%`, "#FF007F", `${loved.displayName} and ${message.author.username} : ${messageOfLove }`, imageOfLove);
        
        }else{
            embed.execute(client, message, "ERROR", "#AE0028", "Please mention a member", images.ErrorIMAGE);
        }

    
    }

}