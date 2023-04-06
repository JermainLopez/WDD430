const string = require("@hapi/joi/lib/types/string");
const mongoose = require("mongoose");

const sequenceSchema = mongoose.Schema({
    maxCeremonyId: { type: Number, required: true },
    maxMemoryId: { type: Number, required: true },
    maxPlaceId: { type: Number, required: true },
});

module.exports = mongoose.model("Sequence", sequenceSchema);
