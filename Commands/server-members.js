const Discord = require("discord.js")
const botconfig = require("../config.json");

module.exports.run = async (bot, message, args) => {
    const {
      MessageEmbed
    } = require('discord.js');
    const {
      guild
    } = message;
    if (message.content.startsWith('$servermembers')) {
      let embedContent = message.content.substring(6);
      let embed = new Discord.MessageEmbed()
        .setDescription(embedContent)
      message.channel.send({
        embed: {
          color: ('#10fd9c'),
          title: `${guild.name} has ${guild.memberCount} members.`,
        }
      });
    }
    module.exports.config = {
      name: "server members",
      description: "shows how many members are in the discord",
      usage: "$server",
      accessableby: "Members",
      aliases: []
    }
  }