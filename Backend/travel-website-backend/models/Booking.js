const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    tripId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    bookingDate: { type: Date, default: Date.now },
    status: { type: String, default: 'Pending' },
});

module.exports = mongoose.model('Booking', bookingSchema);
