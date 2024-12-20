const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
    const { tripId, userId } = req.body;

    try {
        const newBooking = new Booking({ tripId, userId });
        await newBooking.save();
        res.status(201).json({ message: 'Booking successful' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
