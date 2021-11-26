const Discord = require("discord.js");
const cheerio = require("cheerio");
const request = require("request-promise");
const embed = require("./embed.js");

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

        embed.execute(client, message, `New anime episodes:`, "#43960C", `${newLinks}`);


    }


}