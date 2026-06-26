import * as FacilityServices from '../services/facilityServices.js';

export const createController = async (req, res, next) => {
    try {
        const facility = await FacilityServices.createService(req.body);

        return res.status(201).json({
            success: true,
            message: 'Facility create successfully',
            data: facility || {},
        });
    } catch (error) {
        return next(error);
    }
};

export const readsController = async (req, res, next) => {
    try {
        const facilities = await FacilityServices.readsService();

        return res.status(200).json({
            success: true,
            message: 'Facility reads successfully',
            data: facilities || [],
        });
    } catch (error) {
        return next(error);
    }
};

export const readController = async (req, res, next) => {
    try {
        const facility = await FacilityServices.readService(req.params.id);

        return res.status(200).json({
            success: true,
            message: 'Facility read successfully',
            data: facility || {},
        });
    } catch (error) {
        return next(error);
    }
};

export const updateController = async (req, res, next) => {
    try {
        const facility = await FacilityServices.updateService(req.params.id, req.body);

        return res.status(200).json({
            success: true,
            message: 'Facility update successfully',
            data: facility || {},
        });
    } catch (error) {
        return next(error);
    }
};

export const deleteController = async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: 'Facility delete successfully',
        });
    } catch (error) {
        return next(error);
    }
};
