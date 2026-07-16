import express from 'express'
import multer from "multer";

import authMiddleware from '../middlewares/auth.js';
import { createBooking, deleteBooking, getBookings, getMyBookings, updateBookings, updateBookingStatus } from '../controllers/bookingController.js';

const bookingRouter = express.Router();

bookingRouter.post('/', authMiddleware, createBooking);
bookingRouter.get('/', getBookings);

bookingRouter.get('/mybooking', authMiddleware, getMyBookings);

bookingRouter.put('/:id', updateBookings);
bookingRouter.patch('/:id/status', updateBookingStatus);
bookingRouter.delete('/:id', deleteBooking);



export default bookingRouter;