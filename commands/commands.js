const warn = require("./moderator/warn.js");
const kick = require("./moderator/kick.js");
const ban = require("./moderator/ban.js");
const unban = require("./moderator/unban.js");
const ping = require("./normal/ping.js");
const invite = require("./normal/invite.js");
const love = require("./normal/love.js");
const info = require("./normal/info.js");
const say = require("./normal/say.js");
const animeNews = require("./normal/anime-news.js");
const animeBrowse = require("./normal/anime-browse.js");
const help = require("./normal/help.js")

module.exports = commands = [warn, kick, ban, unban, ping, invite, love, info, say, animeNews, animeBrowse, help];

