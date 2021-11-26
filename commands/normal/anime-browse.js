const Discord = require("discord.js");
const cheerio = require("cheerio");
const request = require("request-promise");

module.exports = {

    name: "anime-browse",
    description:"send the new anime.",
    async execute(client, message){

        const $ = await request({

            uri: "https://ww1.animeflv.cc/browse",
            transform: body => cheerio.load(body)
    
        });
    
        var links = [];
    
        $('.ListAnimes').find("li a").each( (index, value) => {
            var link = $(value).attr('href');
            links.push({"link": link});
         });
    
         var newLinks = "";
    
         for(var i=0; i < links.length; i = i + 2){
            newLinks = newLinks + `https://ww1.animeflv.cc${links[i].link}` + "\n";
        }

        let embed = new Discord.MessageEmbed()
            .setTitle(`New animes:`)
            .setColor("#43960C")
            .setDescription(`${newLinks}`)
            .setFooter("Developed By weakness", client.user.avatarURL)
            .setThumbnail()
            .setImage()
                
            message.channel.send({ embeds: [embed] })


    }


}