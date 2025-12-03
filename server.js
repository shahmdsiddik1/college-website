import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Email configuration
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "shahmdsiddik1@gmail.com",      // your Gmail
        pass: "lrgy kdgt nqkd huqz"          // Gmail App password
    },
});

// API endpoint to receive form data
app.post("/send-message", async (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: "shahmdsiddik1@gmail.com",         // where YOU receive messages
        subject: `New Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: "Message Sent Successfully" });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Failed to send message" });
    }
});

// Start server
app.listen(5173, () => {
    console.log("Backend running on http://localhost:5173/");
});
