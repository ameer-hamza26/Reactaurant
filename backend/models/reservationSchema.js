import mongoose from 'mongoose';
import validator from 'validator';

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [3, 'First name must be at least 3 characters'],
        maxlength: [30, 'First name cannot exceed 30 characters']
    },
    lastName: {
        type: String,
        required: true,
        minlength: [3, 'Last name must be at least 3 characters'],
        maxlength: [30, 'Last name cannot exceed 30 characters']
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, 'Please enter a valid email'],
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^\d{10,11}$/.test(v);
            },
            message: 'Please enter a valid phone number (10-11 digits)'
        }
    },
    date: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^\d{4}-\d{2}-\d{2}$/.test(v);
            },
            message: 'Please enter a valid date (YYYY-MM-DD)'
        }
    },
    time: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(v);
            },
            message: 'Please enter a valid time (HH:MM)'
        }
    }
}, {
    timestamps: true
});

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;

