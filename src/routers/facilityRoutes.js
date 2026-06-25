import { Router } from 'express';

import {
    createController,
    readsController,
    readController,
    updateController,
    deleteController,
} from '../controllers/facilityControllers.js';

const router = Router();

router.route('/facilities').post(createController);

router.route('/facilities').get(readsController);

router.route('/facilities/:id').get(readController);

router.route('/facilities/:id').patch(updateController);

router.route('/facilities/:id').delete(deleteController);

export default router;
