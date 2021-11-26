const Discord = require("discord.js");
const cheerio = require("cheerio");
const request = require("request-promise");
const embed = require("./embed.js");

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

        embed.execute(client, message, "New animes:", "#43960C", `${newLinks}`);


    }


}