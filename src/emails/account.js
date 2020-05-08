const sgMail = require("@sendgrid/mail");


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to: email,
        from: "souleymanesow@gmail.com",
        subject: "Thanks for Join us",
        text: `
        Welcome to the app ${name}!
        Let us know how you getting along.
        `
    });
}
const sendCancellationEmail = (email,name)=>{
    sgMail.send({
        to: email,
        from: "souleymanesow@gmail.com",
        subject: "Cancellation confirmation",
        text: `
        We are very sad to see you leave ${name}!
        please take a few moment to Let us know how you we could have improved our service to you.
        `
    });
}

module.exports = { sendWelcomeEmail, sendCancellationEmail}
