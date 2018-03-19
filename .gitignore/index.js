const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("RP Wakfu/Dofus");
    console.log("Le bot a bien ete connecte");
});

bot.login(process.env.TOKEN);

  // Command bonjour
     if (msg.content.startsWith(Bonjour")) {
      msg.reply("Hey");
      console.log("")
    }
