const nodemailer = require("nodemailer");

const { MAIL_HOST, MAIL_PORT, MAIL_PROVIDER, MAIL_USERNAME, MAIL_PASSWORD, MAIL_TO } =
require('../config');

const transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: MAIL_PORT,
  auth: {
    user: MAIL_USERNAME,
    pass: MAIL_PASSWORD,
  },
});

class ContactController {
  constructor(request, response) {
    this.request = request;
    this.response = response;
  }

  sendContactForm() {

  const { name, email, subject, message, mailCopy } = this.request.body;

  const mailOptions = {
    to: [MAIL_TO], // Enter here the email address on which you want to send emails from your customers
    from: name,
    subject,
    text: message,
  };

  if (mailCopy) {
    mailOptions.to.push(email);
  }

  transporter
    .sendMail(mailOptions)
    .then(() => {
      return this.response
      .status(200)
      .json({ msg: "Email sent successfully" });
    })
    .catch((error) => {
      return this.response
      .status(400)
      .json({ errors: [{ msg: `Something went wrong: ${error}` }] });
      });
  }
}

module.exports = ContactController;