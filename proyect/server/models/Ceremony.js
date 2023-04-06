const mongoose = require('mongoose')

const ceremonySchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    phone: { type: String },
    imageUrl: { type: String },
    group: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ceremony" }] || null,
})

module.exports = mongoose.model('Ceremony', ceremonySchema)