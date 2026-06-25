export const createController = async (req, res, next) => {
    try {
        return res.status(201).json({
            success: true,
            message: 'Facility create successfully',
        });
    } catch (error) {
        return next(error);
    }
};

export const readsController = async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: 'Facility reads successfully',
        });
    } catch (error) {
        return next(error);
    }
};

export const readController = async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: 'Facility read successfully',
        });
    } catch (error) {
        return next(error);
    }
};

export const updateContoller = async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: 'Facility update successfully',
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
