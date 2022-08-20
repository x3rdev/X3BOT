require("dotenv").config();
const {logEmbed} = require("./embeds.js");
const {Client, Discord, GatewayIntentBits, EmbedBuilder} = require("discord.js");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});


client.once("ready", () =>  {
    console.log("X3BOT is online")
})

client.on("messageCreate", message => {
    if(!message.author.bot) {
        logEmbed.setAuthor({ name: message.author.username, iconURL: "https://cdn.discordapp.com/avatars/"+message.author.id+"/"+message.author.avatar+".jpeg", url: message.url})
        logEmbed.setURL()
        logEmbed.setDescription(message.content)
        client.channels.cache.get('1010306177432817674').send({embeds: [logEmbed]})
    }
    
})

client.login(process.env.TOKEN);