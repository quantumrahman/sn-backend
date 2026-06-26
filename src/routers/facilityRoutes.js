import { Router } from 'express';

import {
    createController,
    readsController,
    readController,
    updateController,
    deleteController,
} from '../controllers/facilityControllers.js';

import validateMiddleware from '../middlewares/validateMiddleware.js';
import {
    facilityValidationSchema as validateSchema,
    facilityUpdateValidationSchema as updateSchema,
} from '../validators/facilityValidator.js';

const router = Router();

router.route('/facilities').post(validateMiddleware(validateSchema), createController);

router.route('/facilities').get(readsController);

router.route('/facilities/:id').get(readController);

router.route('/facilities/:id').patch(validateMiddleware(updateSchema), updateController);

router.route('/facilities/:id').delete(deleteController);

export default router;
