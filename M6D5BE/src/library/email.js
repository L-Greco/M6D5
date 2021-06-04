import sgMail from "@sendgrid/mail"

export const sendEmail = async emailAddress => {
    try {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)

        const msg = {
            to: emailAddress,
            from: process.env.SENDER_EMAIL,
            subject: "Sending mails is fun i heard",
            text: "and easy to do anywhere, even with Node.js",
            html: "<strong>and easy to do anywhere, even with Node.js</strong>",
        }

        await sgMail.send(msg)
    } catch (error) {
        if (error.response) {
            console.log(error.response.body)
        }
        throw new Error("An error occurred while sending an email")
    }
}