import { z } from 'zod';

export const facilityValidationSchema = z.object({
    name: z
        .string('Name field is required')
        .trim()
        .min(1, 'Name must be at least minimum 1 characters')
        .max(100, 'Name must be at least 100 maximum characters'),
    facility_type: z.enum(
        [
            'Football Turf',
            'Cricket Turf',
            'Badminton Court',
            'Tennis Court',
            'Basketball Court',
            'Swimming Pool',
        ],
        'Facility type must be "Football Turf, Cricket Turf, Badminton Court, Tennis Court, Basketball Court, Swimming Pool"'
    ),
    image: z.url('Must be a valid URL'),
    location: z
        .string('Location field is required')
        .trim()
        .min(1, 'Location must be at least minimum 1 characters')
        .max(200, 'Location must be at least maximum 100 characters'),
    price_per_hour: z.number('Price per hour field is required').positive('Price must be positive'),
    capacity: z
        .number('Capacity field is required')
        .int()
        .min(1, 'Capacity must be at least minimum 1'),
    available_slots: z
        .string('Available slots are required')
        .min(1, 'At least one time slot is required'),
    description: z
        .string('Description field is required')
        .trim()
        .min(10, 'Description must be at least minimum 10 characters')
        .max(500, 'Description must be at least maximum 500 characters'),
    owner_email: z.email('Must be a valid email'),
});

export const facilityUpdateValidationSchema = facilityValidationSchema.partial();
