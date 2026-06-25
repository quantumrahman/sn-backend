import express from 'express';

import facilityRoute from './routers/facilityRoutes.js';
import bookingRoute from './routers/bookingRoutes.js';

import errorMiddleware from './middlewares/errorMiddleware.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).json({ success: true, message: 'server running properly' });
});

app.use('/api/v1', facilityRoute);
app.use('/api/v1', bookingRoute);

app.use(errorMiddleware);

export default app;
