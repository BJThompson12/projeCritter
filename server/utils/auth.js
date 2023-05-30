// auth code resides here
const jwt = require("jsonwebtoken");

const secret = "thesupersecret";
const expiration = "4h";

module.exports = {
  withAuth: function ({req, res, next}) {
    
    let token = req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return console.log('invalid token');
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data
      return data
    } catch {
      console.log("Invalid token");
    } 
    next()
     },

  writeToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
