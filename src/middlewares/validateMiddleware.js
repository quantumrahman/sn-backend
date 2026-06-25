const validateMiddleware = (schema) => {
    return (req, res, next) => {
        try {
            const result = schema.parse(req.body);

            req.body = result.data;

            return next();
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: error.errors.map((err) => ({
                    field: err.path.join('.'),
                    message: err.message,
                })),
            });
        }
    };
};

export default validateMiddleware;
