/**
 * Event that occurs when the bot initialize.
 *
 * @param {Discord.Client} client
 */
function onBotReady(client) {
  return client.on("ready", () => {
    console.log(
      `Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`
    );
  });
}

module.exports = {
  onBotReady
};
