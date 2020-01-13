const { fetchAPIdata } = require("../utils/api");

module.exports = {
  name: "hentai",
  async execute(message, args) {
    const url = await fetchAPIdata("https://nekos.life/api/v2/img/" + args[0]);

    message.channel.send(url.url);
  }
};
