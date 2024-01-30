const nodemailer = require('nodemailer');

exports.generateEmail = async (subject, body, cc, to) => {
    try {
        let testAccount = await nodemailer.createTestAccount();

    let transporter = await nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: "gmail",
        port: 587,
        auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD,
        },
    })

    const info = await transporter.sendMail({
        from: `"ZicoArt 👻" <${process.env.SMTP_EMAIL}>`, // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        html: body, // html body
        cc: cc
    });
    
    return "Email Sent Sucessfully"
    } catch (err) {
        console.log(err)
    }
    
    
}