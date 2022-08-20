const {EmbedBuilder} = require("discord.js");

const logEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setDescription('Some description here')
	.setTimestamp()

exports.logEmbed = logEmbed