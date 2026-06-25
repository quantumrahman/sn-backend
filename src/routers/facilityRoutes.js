import { Router } from 'express';

const router = Router();

router.route('/facilities').post((req, res) =>
    res.status(201).json({
        success: true,
        message: 'POST -> Create facility',
    })
);

router.route('/facilities').get((req, res) =>
    res.status(200).json({
        success: true,
        message: 'GET -> Reads facilities',
    })
);

router.route('/facilities/:id').get((req, res) =>
    res.status(200).json({
        success: true,
        message: 'GET -> Read facility',
    })
);

router.route('/facilities/:id').patch((req, res) =>
    res.status(200).json({
        success: true,
        message: 'PATCH -> Update facility',
    })
);

router.route('/facilities/:id').delete((req, res) =>
    res.status(200).json({
        success: true,
        message: 'DELETE -> Delete facility',
    })
);

export default router;
