import express from 'express';
import { param } from 'express-validator';
import {
    searchHotels,
    getAllHotels,
    getHotelById,
    createPaymentIntent,
    createBooking,
} from '../controllers/HotelController';
import verifyToken from '../middleware/AuthMiddleware';

const router = express.Router();

router.get('/search', searchHotels);

router.get('/', getAllHotels);

router.get('/:id', [param('id').notEmpty().withMessage('Hotel ID is required')], getHotelById);

router.post('/:hotelId/bookings/payment-intent', verifyToken, createPaymentIntent);

router.post('/:hotelId/bookings', verifyToken, createBooking);

export default router;
