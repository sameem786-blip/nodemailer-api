const express = require("express");
const env = require("dotenv").config();

const sendMail = require("./sendMail");

const otp = 8888;

const app = express();
const subject = "Reset Password OTP";
        const to = "sameemabbas2002@outlook.com";
        const cc = "";
        const body = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; text-align: center; color: #333; line-height: 1.6;">
        <h2 style="color: #0066cc;">Password Reset Request</h2>
        
        <p>Hello Sir,</p>
        
        <p>Your OTP for resetting the password is:</p>
        <p style="background-color: #f2f2f2; padding: 10px; font-size: 1.2em; color: #009900; display: inline-block;">${otp}</p>
        
        <p style="color: #333;">This OTP is valid for the next 1 hour.</p>
        
        <p style="color: #cc0000;">If you didn't request a password reset, please ignore this email.</p>
        
        <p style="color: #333; font-size: 0.8em; margin-top: 20px;">Best regards,<br>Developers@ZicoArt</p>
    </div>
`;

sendMail.generateEmail(subject, body, cc, to);

module.exports = app;
