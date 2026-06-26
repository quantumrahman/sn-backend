import * as BookingServices from '../services/bookingServices.js';

export const createController = async (req, res, next) => {
    try {
        const booking = await BookingServices.createService(req.body);

        return res.status(201).json({
            success: true,
            message: 'Booking create successfully',
            data: booking || {},
        });
    } catch (error) {
        return next(error);
    }
};

export const readsController = async (req, res, next) => {
    try {
        const bookings = await BookingServices.readsService();

        return res.status(200).json({
            success: true,
            message: 'Booking reads successfully',
            data: bookings || [],
        });
    } catch (error) {
        return next(error);
    }
};

export const readController = async (req, res, next) => {
    try {
        const booking = await BookingServices.readService(req.params.id);

        return res.status(200).json({
            success: true,
            message: 'Booking read successfully',
            data: booking || {},
        });
    } catch (error) {
        return next(error);
    }
};

export const updateController = async (req, res, next) => {
    try {
        const booking = await BookingServices.updateService(req.params.id);

        return res.status(200).json({
            success: true,
            message: 'Booking update successfully',
            data: booking || {},
        });
    } catch (error) {
        return next(error);
    }
};
