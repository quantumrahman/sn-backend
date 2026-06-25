import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
    {
        facility_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Facility',
            required: [true, 'Facility ID is required'],
        },
        facility_name: {
            type: String,
            required: true,
        },
        user_email: {
            type: String,
            required: [true, 'User email is required'],
        },
        booking_date: {
            type: Date,
            required: [true, 'Booking date is required'],
        },
        time_slot: {
            type: String,
            required: [true, 'Time slot is required'],
        },
        hours: {
            type: Number,
            required: [true, 'Hours are required'],
            min: [1, 'Minimum 1 hour required'],
            max: [8, 'Maximum 8 hours allowed'],
        },
        total_price: {
            type: Number,
            required: true,
            min: [0, 'Total price cannot be negative'],
        },
        status: {
            type: String,
            enum: ['pending', 'confirmed', 'cancelled', 'completed'],
            default: 'pending',
        },
    },
    { timestamps: true, versionKey: false }
);

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
