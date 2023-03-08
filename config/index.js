require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3000,
  NODE_ENV,
  MAIL_HOST: process.env.MAIL_HOST,
  MAIL_PORT: process.env.MAIL_PORT,
  MAIL_USERNAME: process.env.MAIL_USERNAME,
  MAIL_PASSWORD: process.env.MAIL_PASSWORD,
  MAIL_TO: process.env.MAIL_TO
};