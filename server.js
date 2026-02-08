require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

// ✅ Proper CORS setup (VERY IMPORTANT)
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));



app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Test transporter
transporter.verify((error, success) => {
  if (error) {
    console.log("Transporter error:", error);
  } else {
    console.log("Server is ready to send mail");
  }
});

app.post("/send-message", async (req, res) => {
  console.log("REQUEST BODY:", req.body);

  const { name, email, number, message } = req.body;

  try {
    await transporter.sendMail({
      from: `"Stonic Cleaning" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      text: `Name: ${name}
Email: ${email}
Phone: ${number}

Message:
${message}`,
    });

    console.log("EMAIL SENT SUCCESSFULLY");
    res.json({ status: "Message sent successfully!" });

  } catch (error) {
    console.error("EMAIL ERROR:", error);
    res.status(500).json({ status: "Error sending message." });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

// keep alive (temporary)
setInterval(() => {}, 1000);
