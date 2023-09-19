const nodeMailer = require("nodemailer");
// const SMPT_SERVICE = "gmail";
// const SMPT_MAIL = "vikassihmar1999@gmail.com";
// const SMPT_PASSWORD = "";

const sendEmail = async (options) => {
    const transporter = nodeMailer.createTransport({
        // host:"",
        // port:"",
        service: "gmail",
        auth: {
            user: "vikassihmar1999@gmail.com",
            pass: "Vikas@7878",
        },
    });

    const mailOptions = {
        from: "vikassihmar1999@gmail.com",
        to: options.email,
        subject: options.subject,
        text: options.message
    };

    await transporter.sendMail(mailOptions)
};

module.exports = sendEmail; 