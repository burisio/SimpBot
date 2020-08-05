const Discord = require("discord.js")
const botconfig = require("../config.json");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission('ADMINISTRATOR'))
    name = message.content.replace('$createtextchannel ', '')

    message.guild.channels
      .create(name, {
        type: 'text',
      })
      .then((channel) => {
        const categoryId = ''
        channel.setParent(categoryId)
      })
      module.exports.config = {
        name: "text channel",
        description: "creates a text channel",
        usage: "$createtextchannel",
        accessableby: "Admins",
        aliases: []
      }
  }