const Discord = require("discord.js")
const botconfig = require("../config.json");

module.exports.run = async (bot, message, args) => {
    const {
      MessageEmbed
    } = require('discord.js');
    const {
      guild
    } = message

    const {
      name,
      region,
      memberCount,
      owner,
      afkTimeout
    } = guild
    const icon = guild.iconURL()

    const embed = new Discord.MessageEmbed()
      .setTitle(`Server info for "${name}"`)
      .setThumbnail(icon)
      .setColor('#10fd9c')
      .addFields({
        name: 'Region',
        value: region,
      }, {
        name: 'Members',
        value: memberCount,
      }, {
        name: 'Owner',
        value: owner.user.tag,
      }, {
        name: 'AFK Timeout',
        value: afkTimeout / 60,
      })

    message.channel.send(embed)
    module.exports.config = {
      name: "server info",
      description: "shows server information",
      usage: "$serverinfo",
      accessableby: "Members",
      aliases: []
    }
  }