const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "PUT", "DELETE", "POST"],
  })
);
app.post("/send-email", (req, res) => {
  const { name, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: "Contact Us Message",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: error.toString() });
    }
    res.status(200).json({ message: "Email sent: " + info.response });
  });
});

app.get("/", (req, res) => {
  res.send("RFP EASE BACKEND API (WORKING)");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
