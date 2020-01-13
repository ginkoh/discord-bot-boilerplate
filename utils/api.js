const fetch = require("node-fetch");

module.exports = {
  fetchAPIdata: async endpoint => {
    try {
      const request = await fetch(endpoint);
      const data = await request.json();

      return data;
    } catch (err) {
      console.log(err);
    }
  }
};
