export const createController = async (req, res, next) => {
    try {
        return res.status(201).json({
            success: true,
            message: 'Booking create successfully',
        });
    } catch (error) {
        return next(error);
    }
};

export const readsController = async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: 'Booking reads successfully',
        });
    } catch (error) {
        return next(error);
    }
};

export const readController = async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: 'Booking read successfully',
        });
    } catch (error) {
        return next(error);
    }
};

export const updateController = async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: 'Booking update successfully',
        });
    } catch (error) {
        return next(error);
    }
};
