// auth code resides here
const jwt = require("jsonwebtoken");

const secret = "thesupersecret";
const expiration = "4h";

module.exports = {
  withAuth: function ({ req }) {
    let token = req.query.token || req.headers.authorization || req.body.token
    
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }
   
    console.log(token)
    if (!token) {
      console.log("invalid token");
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
      return data;
    } catch {
      console.log("Invalid token");
    }
  },

  writeToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
