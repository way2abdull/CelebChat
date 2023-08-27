import { Users } from "../models/user";
import jwt from "jsonwebtoken";
import { Redis } from "../middleware/redis_session";
import redisClient from "../connections/redis";
import { SessionSchema } from "../models/session";
import { Sessions } from "./session_controller";
import { Auth } from "../middleware/verify";
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';


dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

export class UserController {
    static async userSignUp(req: any, res: any) {
        let details = req.body;
        console.log(details);
        try {
            const user = await Users.findOne({ where: { id: details.id } });
            console.log(user);
            if (!user) {
                const salt = await bcrypt.genSalt(10);
                const hashpassword = await bcrypt.hash(details.password, salt);
                const user_details = await Users.create({
                    password: hashpassword,
                    ...req.body
                });
                res.status(201).json({ message: "User SignUp Success, go to Login" });
                console.log("New Created user Detail", user_details);
            }else {res.status(404).json({ message: "User already exist" })}
        } catch (error) {res.status(500).json({ message: "Server Error" , error})}
    }


    static async user_login(req: any, res: any) {
        const detail: { email: any; password: any; } = req.body;
        const device = req.headers.device;
        console.log(device);
        try {
            await Auth.verify_login_details.validateAsync(detail);
            const user = await Users.findOne({ where: { email: detail.email } });
            console.log(user);
            if (user) {
                const userSession = await SessionSchema.findOne({ where: { id: user.id } });
                if (!userSession || !userSession.isActive) {
                    const hash = user.password;
                    if (bcrypt.compare(detail.password, hash)) {
                        const token = jwt.sign({ email: detail.email }, SECRET_KEY, { expiresIn: '2d' });
                        await Sessions.maintain_session(req, res, device, user, userSession);
                        console.log("New session created", userSession);
                        await Redis.rediss_session(redisClient, user, device);
                        res.status(201).json({ message: "login successfully", user: user, token });
                    }
                    else {res.status(404).json({ message: "Incorrect Password" })}
                }else {res.status(404).json({ message: "User is already active" })}
            }else {res.status(404).json({ status: "User not found" })}
    } catch (error) {res.status(500).json({ status: "Server Error" ,error});
            console.log(error)}
    }

    static async user_logout(req: any, res: any) {
        try {
            const user = await Users.findOne({ where: { email: req.body.email } });
            if (user) {
                const userSession = await SessionSchema.findOne({ where: { id: user.id } });
                
                    if (userSession) {
                        await Redis.logout_session_redis(redisClient, user);
                        const updatedUserSession = await SessionSchema.update({ isActive: !userSession.isActive },
                            { where: { id: userSession.id } });
                        res.status(201).json({ message: "User Logout Successfully" });
                    }else {res.status(404).json({ message: "User already logged out" })}
                }
                else {res.status(404).json({ message: "User not found" })}
        }
        catch (err) {res.status(500).json({ message: "Server Error",err})}
    }

    static async forgot_password(req: any, res: any) {
        try {
            const { email } = req.body;
            const user = await Users.findOne({ where: { email } });
            if (!user) {
                return res.status(400).json({ message: 'Email not found' });
            }

            let OTP = Math.floor(1000 + Math.random() * 9000);
            Redis.save_otp(email, OTP);

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                host: 'smtp.gmail.com',
                port: 465,
                secure: false,
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.EMAIL_PASSWORD,
                },
            });

            const mailOptions = {
                from: process.env.EMAIL,
                to: req.body.email,
                subject: 'Password Reset Request',
                text: `You are receiving this email because you (or someone else) has requested a password reset for your account.\n RESET PASSWORD OTP: ${OTP}\n 
                If you did not request this, please ignore this email.`,
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    return res.status(500).json({ message: 'Error sending email' });
                } else {
                    console.log('Email sent: ' + info.response);
                    return res.status(200).json({ message: 'Password reset link sent to email' })}
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server error' });
        }
    }

    static async reset_password(req: any, res: any) {
        try {
            const { email, otp, newPassword } = req.body;
            const user = await Auth.find_user(email);;
            if (!user) {
                return res.status(400).json({ message: 'Invalid User' });
            }
            const userOTP = await Redis.get_otp(email);
            console.log(userOTP);
            if (!userOTP || userOTP !== otp) {
                return res.status(401).json({ error: 'Invalid OTP' });
            }
            console.log("old password", user.password);
            user.password = await Auth.generate_hash_pass(newPassword);
            console.log("new password", user.password);
            await user.save();
            return res.status(200).json({ message: 'Password reset successful' });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server error' });
        }
    }
}