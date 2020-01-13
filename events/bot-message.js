const ENV = process.env;

/**
 * Event that occurs when the bot receives a message.
 * 
 * @param {Discord.Client} client 
 */
function onBotMessage(client) {
  client.on("message", async message => {
    if (
      message.author.bot ||
      message.channel.type === "dm" ||
      !message.content.startsWith(ENV.PREFIX)
    )
      return;

    const messageArgs = message.content
      .slice(ENV.PREFIX.length)
      .trim()
      .split(/ +/g);

    const command = messageArgs.shift().toLowerCase();

    client.commands.get(command).execute(message, messageArgs);
  });
}

module.exports = {
  onBotMessage
};
