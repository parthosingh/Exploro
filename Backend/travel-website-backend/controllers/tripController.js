const Trip = require('../models/Trip');

exports.getAllTrips = async (req, res) => {
    try {
        const trips = await Trip.find();
        res.status(200).json(trips);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
