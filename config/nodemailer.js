import nodemailer from 'nodemailer'
import { EMAIL_PASSWORD } from "./env.js"
export const accountEmail = 'ranveerjais9984@gmail.com'
const transporter = nodemailer.createTransporter( {
    service : 'gmail',
    auth: {
        user : accountEmail,
        pass : EMAIL_PASSWORD
    }
})