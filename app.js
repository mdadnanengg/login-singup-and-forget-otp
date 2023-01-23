import express from "express";
import bodyParser from "body-parser";
import { empController } from "./controllers/empController.js";
import connectDB from './db/connection.js'
import { config } from "dotenv";
import nodemailer from 'nodemailer';
import otpGenerator from 'otp-generator'
const app=express();
let port=8000;
const url='mongodb://0.0.0.0:27017';
const dbName='tekiskyDB';
connectDB(url,dbName);
config()


app.set('views','./views');
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req , res)=>{
    res.render('login.ejs')
});

app.get('/forget',(req,res)=>{
    let otp = otpGenerator.generate(4, { upperCaseAlphabets: false, specialChars: false , lowerCaseAlphabets:false});
    console.log(otp)
})

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com' ,
    service: 'gmail' ,
    secure: true ,
    port: 587 ,
    auth: {
        user: 'mdadnanmdyaseen@gmail.com' ,
        pass: process.env.pass ,
    }
})

const mailOption = {
    from: 'mdadnanmdyaseen@gmail.com' ,
    to: ['anasmomin001100@gmail.com','mdadnanengg@gmail.com','mustafamj805@gmail.com'],
    subject: 'test' ,
    text: 'hi adnan' ,
    html: `<h1> Your OTP IS 123456 <h1/>`
}

transporter.sendMail(mailOption,(err, info)=>{
    if (err) throw err
    console.log(info)
    setTimeout(()=>{
        otp = null
        console.log(otp)
    },5000)
})


app.post('/dashboard',empController);
// app.post('/emp',empController);

app.listen(port,()=>{
    console.log(`server started at  port number ${port}`);
});