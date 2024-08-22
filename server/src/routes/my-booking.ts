import express from 'express';
import verifyToken from '../middleware/AuthMiddleware';
import { getUserBookings } from '../controllers/MyBookingController';

const router = express.Router();

// /api/my-bookings
router.get('/', verifyToken, getUserBookings);

export default router;
