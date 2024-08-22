import express from 'express';
import { check } from 'express-validator';
import { loginUser, validateToken, logoutUser } from '../controllers/AuthController';
import verifyToken from '../middleware/AuthMiddleware';

const router = express.Router();

router.post(
    '/login',
    [
        check('email', 'Email is required').isEmail(),
        check('password', 'Password with 6 or more characters required').isLength({ min: 6 }),
    ],
    loginUser,
);

router.get('/validate-token', verifyToken, validateToken);

router.post('/logout', logoutUser);

export default router;
