const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default function handler(req, res) {
  const body = JSON.parse(req.body);
  
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}\r\n
  `;

  const data = {
    to: 'frontlabsamsterdam@gmail.com',
    from: 'frontlabsamsterdam@rtxp.nl',
    subject: 'New web form message!',
    text: message,
    html: message.replace(/\r\n/g, '<br>')
  }

  mail.send(data, function(err, info) {
    if (err) {
      console.log("Email not send");
    } else {
      console.log("Email sent succesfully");
    }
  });

  res.status(200).json({ status: 'Okay' })
} 
