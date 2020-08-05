const Discord = require("discord.js")
const botconfig = require("../config.json");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission('ADMINISTRATOR'))
    name = message.content.replace('$createvoicechannel ', '')

    message.guild.channels
      .create(name, {
        type: 'voice',
      })
      .then((channel) => {
        const categoryId = ''
        channel.setParent(categoryId)
        channel.setUserLimit(10)
      })
      module.exports.config = {
        name: "voice channel",
        description: "creates a voice channel",
        usage: "$createvoicechannel",
        accessableby: "Admins",
        aliases: []
      }
  }