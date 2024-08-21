const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer"); // For sending emails

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static("public"));

// POST endpoint for form submissions
app.post("/contact", async (req, res) => {
  const { fullName, email, message } = req.body;

  // Here you would normally send an email or save to a database
  // Example using nodemailer to send an email:
  let transporter = nodemailer.createTransport({
    service: "Gmail", // You can use other services
    auth: {
      user: "artemios@bluedevdigital.com",
      pass: "your-email-password",
    },
  });

  let mailOptions = {
    from: email,
    to: "artemios@bluedevdigital.com",
    subject: `Contact Form Submission from ${fullName}`,
    text: `Message: ${message}\n\nFrom: ${fullName}\nEmail: ${email}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Message sent successfully!");
  } catch (error) {
    res.status(500).send("Error sending message. Please try again.");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
