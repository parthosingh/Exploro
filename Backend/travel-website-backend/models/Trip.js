const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    date: { type: Date, required: true },
    organizer: { type: String, required: true },
});

module.exports = mongoose.model('Trip', tripSchema);
