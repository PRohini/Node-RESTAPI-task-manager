const sgMail = require('@sendgrid/mail');


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'punatirohini@gmail.com',
        subject: 'Nice to see you',
        text: `Welcome to the app, ${name}. access your tasks now   `

    })
}

const sendUserCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'punatirohini@gmail.com',
        subject: 'Cancellation Email from my App',
        text: `Good Bye, ${name}. Enjoy !!!!!!  `

    })
}
module.exports = {
    sendWelcomeEmail,
    sendUserCancellationEmail
}