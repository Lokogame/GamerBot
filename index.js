const Discord = require("discord.js")
const client = new Discord.Client(
    {intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"]}
)

client.login(process.env.token)

client.on("ready", () => {
console.log("Bot ONLINE")



})

client.on("messageCreate", (message) => {
  if(message.content == "!youtube"){
    message.channel.send("Questo è il mio canale: https://www.youtube.com/channel/UCQtVVCV47nxraIi1xP9jXWg")
  }

  if(message.content == "!telegram"){
      var embed = new Discord.MessageEmbed()
      .setTitle("Gruppo Telegram")
      .setDescription("Il Gruppo Telegram serve per aggiornati sulle live, server discord, canale youtube e molto altro. Il link Telegram è il seguente: https://t.me/Player_community")
      .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Telegram_alternative_logo.svg/1200px-Telegram_alternative_logo.svg.png")


      message.channel.send({embeds: [embed]})
  }



})