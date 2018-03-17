const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("RP Wakfu/Dofus");
    console.log("Le bot a bien ete connecte");
});

bot.login("process.env.NDI0NTMwMzEyODUzMzIzNzg2.DY6PMQ.q8kBwzOoK0YOSbDFzXOHx7U8B0Y");
