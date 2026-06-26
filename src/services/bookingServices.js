/* eslint-disable no-unused-vars */
import Booking from '../models/bookingModel.js';
import AppError from '../utils/appError.js';

export const createService = async (payload) => {
    const bookingExists = await Booking.findOne({
        facility_name: payload.facility_name,
        user_email: payload.user_email,
    });

    if (bookingExists) {
        throw new AppError(400, 'You already booked this facility');
    }

    return await Booking.create(payload);
};

export const readsService = async () => {
    return await Booking.find().populate('facility_id').lean();
};

export const readService = async (id) => {
    const booking = await Booking.findById({
        _id: id,
    })
        .populate('facility_id')
        .lean();

    if (!booking) {
        throw new AppError(404, 'Booking not found');
    }

    return booking;
};

export const updateService = async (id, payload) => {
    const booking = await Booking.findByIdAndUpdate(
        {
            _id: id,
        },
        {
            $set: {
                status: 'cancelled',
            },
        },
        {
            returnDocument: 'after',
        }
    ).lean();

    if (!booking) {
        throw new AppError(404, 'Booking not found');
    }

    return booking;
};
