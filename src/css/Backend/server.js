const express = require('express');
const nodemailer = require('nodemailer');

// Create a router instance
const router = express.Router();

router.post('/submit-contact-form', (req, res) => {
    const { fullName, email, questionComment } = req.body;

    // Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'linjordan467@gmail.com',
            pass: 'xqfk xfzm khye wkji'
        }
    });

    const mailOptions = {
        to: email,
        from: 'jlinwork0605@gmail.com',
        subject: 'New Contact Us Form Submission',
        text: `
        Hello,

        You have received a new message from the Contact Us form:

        Name: ${fullName}

        Email: ${email}
        
        Message: ${questionComment}
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send('Error sending email');
        }
        res.status(200).send('Email sent successfully');
    });
});

module.exports = router;
