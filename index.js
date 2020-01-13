// File System.
const fs = require("fs");

// Config dot env.
const dotenv = require("dotenv").config();
const ENV = process.env;

// Discord.js
const Discord = require("discord.js");

// Create the discord client connection.
const Client = new Discord.Client({ disableEveryone: true });

// Events.
const { onBotMessage } = require("./events/bot-message");
const { onBotReady } = require("./events/bot-ready");

// Utils.
const { setCommands } = require("./utils/commands");

function startBot(client) {
  // Setup the commands collection.
  client.commands = new Discord.Collection();

  // Read the command files.
  const commandFiles = fs.readdirSync("./commands/");

  // Setup the commands.
  setCommands(client, commandFiles);

  console.log(ENV.TOKEN)

  // Log in the bot.
  client.login(ENV.TOKEN);

  // Bot ready event.
  onBotReady(client);

  // Bot message event.
  onBotMessage(client);
}

// Start the bot.
startBot(Client);

module.exports = {
  ENV
};
