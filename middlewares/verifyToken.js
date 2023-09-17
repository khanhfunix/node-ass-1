const Token = require("../models/Token");
exports.verifyToken = (req, res, next) => {
  const tokenSubmit = req.query.token;
  console.log(tokenSubmit);
  Token.verifyToken((user) => {
    const isVerify = user.find((e) => e.token === tokenSubmit);

    if (!isVerify) {
      return res.status(401).send({ message: "Unauthorized", status: 401 });
    }
    next();
  });
};
