import { Router } from 'express';

import {
    createController,
    readsController,
    readController,
    updateController,
} from '../controllers/bookingControllers.js';

import validateMiddleware from '../middlewares/validateMiddleware.js';
import { bookingValidateSchema } from '../validators/bookingValidator.js';

const router = Router();

router.route('/bookings').post(validateMiddleware(bookingValidateSchema), createController);

router.route('/bookings').get(readsController);

router.route('/bookings/:id').get(readController);

router.route('/bookings/:id').patch(updateController);

export default router;
