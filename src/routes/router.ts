import express from 'express';
import { auth } from '../middleware/auth';
import { UserController } from '../controllers/user_controller';
import { validation } from '../middleware/joi_valid';
import { sessionCheck } from '../middleware/redis_session';

const router = express.Router();

router.post('/signup', validation.signupValidate,UserController.userSignUp);
router.post('/login',validation.loginValidation,UserController.user_login);
router.post('/logout',UserController.user_logout);
router.post('/forgetpassword',auth,UserController.forgot_password);
router.post('/resetpassword',auth,UserController.reset_password)  //with otp

export {router};