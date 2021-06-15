const bcrypt = require("bcrypt");

const bcryptString = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

const verifyBcrypt = (hash, password) => {
  return bcrypt.compare(password, hash);
};

module.exports = {
  bcryptString,
  verifyBcrypt,
};
