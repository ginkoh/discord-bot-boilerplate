/**
 * Set all commands for a discord client.
 *
 * @param {Discord.Client} client - The discord client to set te commands.
 * @param {String[]} commandFiles - The path of each command file.
 */
function setCommands(client, commandFiles) {
  commandFiles.forEach(file => {
    // Dinamically requires the current command.
    const command = require(`../commands/${file}`);

    // Setup the command attaching the command name to the command file.
    client.commands.set(command.name, command);
  });
}

module.exports = {
  setCommands
};
