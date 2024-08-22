import userRoute from '../routes/users';
import authRoute from '../routes/auth';
import myHotelRoute from '../routes/my-hotel';
import hotelRoute from '../routes/hotel';
import myBookingRoute from '../routes/my-booking';

const routes = (app: any) => {
    app.use('/api/auth', authRoute);
    app.use('/api/users', userRoute);
    app.use('/api/my-hotels', myHotelRoute);
    app.use('/api/hotels', hotelRoute);
    app.use('/api/my-bookings', myBookingRoute);
};

export default routes;
