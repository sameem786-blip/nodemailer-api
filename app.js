const express = require("express");
const env = require("dotenv").config();

const sendMail = require("./sendMail");

const xlsx = require('xlsx');
const workbook = xlsx.readFile('./1.xlsx'); // Replace 'example.xlsx' with the path to your Excel file

// Assuming you want to read from the first sheet
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert the worksheet to a JSON object
const data = xlsx.utils.sheet_to_json(worksheet);

const app = express();

const emailBodies = [
    `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; text-align: center; color: #333; line-height: 1.6;">
        <h2 style="color: #0066cc;">Cover Letter for Job Application</h2>
        
        <p>Dear Hiring Manager,</p>
        
        <p>I am excited to apply for the [Position Title] position at [Company Name]. With a background in [relevant field or skill], I am confident in my ability to contribute effectively to your team.</p>
        
        <p>[Share a specific achievement or project that demonstrates your skills.]</p>
        
        <p>I am particularly drawn to [Company Name]'s commitment to [specific aspect of the company or its mission], and I am eager to be a part of such an innovative and forward-thinking organization.</p>
        
        <p>I have attached my resume for your review, and I am available at your earliest convenience for an interview. Thank you for considering my application. I look forward to the opportunity to discuss how my experience and skills align with the needs of your team.</p>
        
        <p>Sincerely,<br>Your Name</p>
    </div>
    `,
    `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; text-align: center; color: #333; line-height: 1.6;">
        <h2 style="color: #0066cc;">Application for [Position Title] Position</h2>
        
        <p>Dear Hiring Committee,</p>
        
        <p>I am writing to express my interest in the [Position Title] position at [Company Name]. With a background in [relevant field or skill], I am confident that I can make a meaningful contribution to your team.</p>
        
        <p>[Highlight a specific skill or experience that sets you apart.]</p>
        
        <p>I am impressed by [Company Name]'s dedication to [specific aspect of the company or its mission], and I am excited about the opportunity to be a part of your team and contribute to your continued success.</p>
        
        <p>Thank you for considering my application. I have attached my resume for your review and would welcome the opportunity to discuss how my qualifications align with the needs of [Company Name].</p>
        
        <p>Best regards,<br>Your Name</p>
    </div>
    `,
    // Add more email bodies as needed
];


// Function to select a random email body
function getRandomEmailBody() {
    const randomIndex = Math.floor(Math.random() * emailBodies.length);
    return emailBodies[randomIndex];
}

// Example usage
const body = getRandomEmailBody();
const subject = "Reset Password OTP";
        const to = "dheerajduseja42@gmail.com";
        const cc = "";

// sendMail.generateEmail(subject, body, cc, to);

data.forEach(row => {
    const body = getRandomEmailBody();
    const subject = row.Subject;
    const to = row.Email;
    sendMail.generateEmail(subject, body, "", to);
    console.log("------");
});

module.exports = app;
