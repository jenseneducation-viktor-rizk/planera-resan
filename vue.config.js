const fs = require("fs");

module.exports = {
  devServer: {
    https: {
      key: fs.readFileSync("./certs/192.168.10.238-key.pem"),
      cert: fs.readFileSync("./certs/192.168.10.238.pem")
    }
  }
};