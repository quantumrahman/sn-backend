import { z } from 'zod';

export const bookingValidateSchema = z.object({
    facility_id: z
        .string('Facility id field is required')
        .regex(/^[0-9a-fA-F]{24}$/, 'Invalid facility id'),
    booking_date: z
        .string('Booking date field is required')
        .regex(/^\d{2}-\d{2}-\d{4}$/, 'Invalid date format (MM-DD-YYYY)'),
    time_slot: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format (HH:MM)'),
    hours: z
        .number('Hours field is required')
        .int()
        .min(1, 'Hours must be at least minimum 1')
        .max(8, 'Hours must be at least maximum 8'),
});
