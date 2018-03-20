const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("RP Wakfu/Dofus");
    console.log("Le bot a bien ete connecte");
});

bot.login(process.env.TOKEN);

// Discord.js
var Discord = require("discord.js");
//require("node-opus");
require("opusscript");

// autoReconnect is enabed
var bot = new Discord.Client({autoReconnect: true});


// Set the prefix
let prefix = "/";

// Ready? Set? Go!
bot.on('ready', () => {

  bot.user.setStatus("online"); //dnd , online , ldle
  bot.user.setGame("Un jeux ici");
  //bot.user.setGame("In Dev");
  console.log("Newston ! Le bot est en ligne");
});


bot.on("message", msg => {

      // Command /help
     if (msg.content.startsWith(prefix + "help")) {
      msg.channel.sendMessage("```List of commands : \n\n /version  | Version  \n /help | Toute les commandes \n    ```");
      console.log("Command executed: /help")
    }
    // Command /version
    if (msg.content.startsWith(prefix + "version")) {
      msg.channel.sendMessage("``` Bot Discord Basic - Version 1.0 \n Créateur : M0dGt | Changer si cela vous envie. Je ne donne aucun copyright```");
      console.log("Command executed : /version")
    }

});

