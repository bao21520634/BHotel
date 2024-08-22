import express from 'express';
import { check } from 'express-validator';
import verifyToken from '../middleware/AuthMiddleware';
import { getUserProfile, registerUser } from '../controllers/UserController';

const router = express.Router();

router.get('/me', verifyToken, getUserProfile);

router.post(
    '/register',
    [
        check('firstName', 'First Name is required').isString(),
        check('lastName', 'Last Name is required').isString(),
        check('email', 'Email is required').isEmail(),
        check('password', 'Password with 6 or more characters required').isLength({ min: 6 }),
    ],
    registerUser,
);

export default router;
