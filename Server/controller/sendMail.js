const nodemailer = require('nodemailer')
require('dotenv').config()


const sendMail = (req, res)=>{
    let transporter = nodemailer.createTransport({
        service: process.env.SERVICE,
        auth: {
            user : process.env.USER_G,
            pass : ''
        }
    })
    let mailOptions = {
        from : 'oyeniranoluwafemi36@gmail.com',
        to : 'Users',
        subject : 'Testing Nodemailer',
        text : 'The body of the message',
		// html : 
    }
    transporter.sendMail(mailOptions)
    .then((info)=>{
        console.log(info);
        res.status(201).json({message: 'success'})
    })
    .catch((err)=>{
        console.log(err);
    })
}
module.exports = sendMail