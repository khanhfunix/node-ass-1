// xu ly data token
const fs = require("fs");

const path = require("path");

// path toi file token
const pathToUserToken = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "userToken.json"
);
// lay token tu file
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
  // lay token
  static verifyToken(cb) {
    getTokenFromFile((user) => {
      cb(user);
    });
  }
};
