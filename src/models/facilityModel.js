import mongoose from 'mongoose';

const facilitySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Facility name is required'],
            trim: true,
        },
        facility_type: {
            type: String,
            required: [true, 'Facility type is required'],
            enum: [
                'Football Turf',
                'Cricket Turf',
                'Badminton Court',
                'Tennis Court',
                'Basketball Court',
                'Swimming Pool',
            ],
        },
        image: {
            type: String,
            required: [true, 'Image is required'],
        },
        location: {
            type: String,
            required: [true, 'Location is required'],
        },
        price_per_hour: {
            type: Number,
            required: [true, 'Price per hour is required'],
            min: [0, 'Price cannot be negative'],
        },
        capacity: {
            type: Number,
            required: [true, 'Capacity is required'],
            min: [1, 'Capacity must be at least 1'],
        },
        available_slots: [
            {
                type: String,
                required: [true, 'Available slots are required'],
            },
        ],
        description: {
            type: String,
            required: [true, 'Description is required'],
            maxLength: [500, 'Description cannot exceed 500 characters'],
        },
        owner_email: {
            type: String,
            required: [true, 'Owner email is required'],
        },
    },
    { timestamps: true, versionKey: false }
);

const Facility = mongoose.model('Facility', facilitySchema);

export default Facility;
