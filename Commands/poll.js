const Discord = require("discord.js")
const botconfig = require("../config.json");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission('ADMINISTRATOR'))
    channelIds = [
      // '', // 
    ]

    const addReactions = (message) => {
      message.react('👍')

      setTimeout(() => {
        message.react('👎')
      }, 750)
    }
    const Discord = require('discord.js')
    if (message.member.hasPermission('ADMINISTRATOR')) {
      if (channelIds.includes(message.channel.id)) {
        addReactions(message)
      } else if (message.content.toLowerCase() === '$poll') {
        await message.delete()

        const fetched = await message.channel.messages.fetch({
          limit: 1
        })
        if (fetched && fetched.first()) {
          addReactions(fetched.first())
        }
      }
    }
    module.exports.config = {
      name: "poll",
      description: "Adds a thumbs up and down emoji to the last message sent before the command.",
      usage: "$poll",
      accessableby: "Admins",
      aliases: []
    }
  }