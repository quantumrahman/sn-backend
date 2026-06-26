/* eslint-disable no-unused-vars */

import Facility from '../models/facilityModel.js';
import AppError from '../utils/appError.js';

export const createService = async (payload) => {
    const facilityExists = await Facility.findOne({
        name: payload.name,
    }).lean();

    if (facilityExists) {
        throw new AppError(400, 'Facility already exists');
    }

    const available_slots = payload.available_slots
        .split(',')
        .map((slot) => slot.trim())
        .filter(Boolean);

    return await Facility.create({
        ...payload,
        available_slots: available_slots,
    });
};

export const readsService = async () => {
    return await Facility.find().lean();
};

export const readService = async (id) => {
    const facility = await Facility.findById({
        _id: id,
    });

    if (!facility) {
        throw new AppError(404, 'Facility not found');
    }

    return facility;
};

export const updateService = async (id, payload) => {
    const available_slots = payload.available_slots
        .split(',')
        .map((slot) => slot.trim())
        .filter(Boolean);

    const facility = await Facility.findByIdAndUpdate(
        { _id: id },
        {
            $set: {
                ...payload,
                available_slots: available_slots,
            },
        },
        {
            returnDocument: 'after',
        }
    );

    if (!facility) {
        throw new AppError(404, 'Facility not found');
    }

    return facility;
};

export const deleteService = async (id) => {
    console.log('delete service');
};
