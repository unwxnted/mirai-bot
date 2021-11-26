const Discord = require("discord.js");
const cheerio = require("cheerio");
const request = require("request-promise");

module.exports = {

    name: "anime-news",
    description:"send the new anime episodes.",
    async execute(client, message){

        const $ = await request({

            uri: "https://ww1.animeflv.cc/",
            transform: body => cheerio.load(body)
    
        });
    
        var links = [];
    
        $('.ListEpisodios').find("li a").each((index, value) => {
            var link = $(value).attr('href');
            links.push({"link": link});
         });

         var newLinks = "";
    
         for(var i=0; i < links.length; i = i + 1){
            newLinks = newLinks + `https://ww1.animeflv.cc${links[i].link}` + "\n";
        }

        let embed = new Discord.MessageEmbed()
            .setTitle(`New anime episodes:`)
            .setColor("#43960C")
            .setDescription(`${newLinks}`)
            .setFooter("Developed By weakness", client.user.avatarURL)
            .setThumbnail()
            .setImage()
                
            message.channel.send({ embeds: [embed] })


    }


}