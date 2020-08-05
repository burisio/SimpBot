const Discord = require("discord.js")
const botconfig = require("../config.json");

module.exports.run = async (bot, message, args) => {
    const {
      MessageEmbed
    } = require('discord.js');
    const {
      guild
    } = message;
    const embed = new Discord.MessageEmbed()
      .setTitle(`Welcome to **${guild.name}**! The prefix for SimpBot is **$**`)
      .setAuthor('Help Module!', '')
      .setColor('#10fd9c')
      .addFields({
        name: '**Administrator Commands!**',
        value: 'These commands can only be used if you have the permission of **Administrator**.'
      }, {
        name: '**$kick -** Kicks a member from the server.',
        value: '**- Example: $kick [user] [reason]**'
      }, {
        name: '**$ban -** Bans a member from the server.',
        value: '**- Example: $kick [user] [reason]**'
      }, {
        name: '**$cc or $clearchannel -** Clears/Purges 50 messages from the channel you use the command in.',
        value: '**- Example: $cc or $clearchannel**',
        inline: false
      }, {
        name: '**$poll -** Adds a thumbs up and down emoji to the last message you sent before the command.',
        value: '**- Example: $poll**',
        inline: false
      }, )
      .setTimestamp()
      .setFooter('SimpBot', '');


    message.channel.send(embed)
    module.exports.config = {
      name: "help",
      description: "Sends a help module.",
      usage: "$help",
      accessableby: "Members",
      aliases: []
  }
}