
// task 5 :
console.log('\n \n ------------- task 5 --------------- \n ')
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'email',
    pass: 'password'
  }
});


let mailOptions = {
  from: '', 
  to: '', 
  subject: 'Test Email', 
  text: 'Hello from Node.js!', 
  html: '<b>Hello Im Hamza !</b>' 
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent success:', info.messageId);
});
