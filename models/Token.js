const fs = require("fs");

const path = require("path");

const pathToUserToken = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "userToken.json"
);

const getTokenFromFile = (cb) => {
  fs.readFile(pathToUserToken, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Token {
  static verifyToken(cb) {
    getTokenFromFile((user) => {
      cb(user);
    });
  }
};
