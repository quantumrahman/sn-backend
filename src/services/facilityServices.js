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
    console.log('reads service');
};

export const readService = async (id) => {
    console.log('read service');
};

export const updateService = async (id, payload) => {
    console.log('update service');
};

export const deleteService = async (id) => {
    console.log('delete service');
};
