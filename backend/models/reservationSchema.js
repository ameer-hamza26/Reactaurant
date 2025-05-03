import mongoose from 'mongoose';
import validator from 'validator';

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [3, 'first name must be at least 3 characters'],
        maxlength:[30,'first name cannot exceed 30 characters']
    },
    lastName: {
        type: String,
        required: true,
        minlength: [3, 'last name must be at least 3 characters'],
        maxlength:[30,'Last name cannot exceed 30 characters']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, 'Please enter a valid email'],
    },
    phone: {
        type: String,
        required: true,
        validate: [validator.isMobilePhone, 'Please enter a valid phone number'],
        minlength: [11, 'Phone number must be at least 11 digits'],
        maxlength: [11, 'Phone number cannot exceed 11 digits'],
    },
    date: {
        type: Date,
        required: true,
    },
    
});

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;

