var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "yahoo",
  auth: {
    user: "dummy-email@yahoo.com",
    pass: "test",
  },
 
 
  tls: {
    rejectUnauthorized: false
}
});

var mailOptions = {
  from: "dummy-email*@yahoo.com",
  to: "dummy-email2*@yahoo.com",
  subject: "Send Email",
  text: "nodemailer test",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
