import express from 'express';
import multer from 'multer';
import { body } from 'express-validator';
import verifyToken from '../middleware/AuthMiddleware';
import { createHotel, getHotelsByUser, getHotelById, updateHotel } from '../controllers/MyHotelController';

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB
    },
});

router.post(
    '/',
    verifyToken,
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('city').notEmpty().withMessage('City is required'),
        body('country').notEmpty().withMessage('Country is required'),
        body('description').notEmpty().withMessage('Description is required'),
        body('type').notEmpty().withMessage('Hotel type is required'),
        body('pricePerNight').notEmpty().isNumeric().withMessage('Price per night is required and must be a number'),
        body('facilities').notEmpty().isArray().withMessage('Facilities are required'),
    ],
    upload.array('imageFiles', 6),
    createHotel,
);

router.get('/', verifyToken, getHotelsByUser);

router.get('/:id', verifyToken, getHotelById);

router.put('/:hotelId', verifyToken, upload.array('imageFiles'), updateHotel);

export default router;
