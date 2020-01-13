const ENV = process.env;

/**
 * Event that occurs when the bot receives a message.
 *
 * @param {Discord.Client} client
 */
function onBotMessage(client) {
  return client.on("message", async message => {
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

    if (client.commands.get(command)) {
      client.commands.get(command).execute(message, messageArgs);
    } else {
      message.channel.send(message.author + ", this command does not exists.");
    }
  });
}

module.exports = {
  onBotMessage
};
