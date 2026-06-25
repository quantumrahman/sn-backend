import { Router } from 'express';

const router = Router();

router.route('/bookings').post((req, res) =>
    res.status(201).json({
        success: true,
        message: 'POST -> Create bookings',
    })
);

router.route('/bookings').get((req, res) =>
    res.status(200).json({
        success: true,
        message: 'GET -> Reads bookings',
    })
);

router.route('/bookings/:id').get((req, res) =>
    res.status(200).json({
        success: true,
        message: 'GET -> Read booking',
    })
);

router.route('/bookings/:id').patch((req, res) =>
    res.status(200).json({
        success: true,
        message: 'PATCH -> Update bookings',
    })
);

export default router;
