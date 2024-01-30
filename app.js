const express = require("express");
const env = require("dotenv").config();

const sendMail = require("./sendMail")

const app = express();

sendMail.generateEmail();

module.exports = app;
