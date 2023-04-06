var Sequence = require("../models/sequence");

/* var maxDocumentId;
var maxMessageId; */
var maxCeremonyId;
var sequenceId = null;

function SequenceGenerator() {

    try {
        Sequence.findOne().exec(function(err, sequence) {
            if (err) {
                return res.status(500).json({
                    title: "An error occurred",
                    error: err,
                });
            }

            sequenceId = sequence._id;
            /* maxDocumentId = sequence.maxDocumentId;
            maxMessageId = sequence.maxMessageId; */
            maxCeremonyId = sequence.maxCeremonyId;
            maxMemoryId = sequence.maxMemoryId;
        });

    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

SequenceGenerator.prototype.nextId = function(collectionType) {
    var updateObject = {};
    var nextId;



    try {
        switch (collectionType.toLowerCase()) {
            /* case "documents":
                maxDocumentId++;
                updateObject = { maxDocumentId: maxDocumentId };
                nextId = maxDocumentId;
                break;*/
            case "Memories":
                maxMemoryId++;
                updateObject = { maxMemoryId: maxMemoryId };
                nextId = maxMemoryId;
                break;
            case "ceremonies":
                maxCeremonyId++;
                updateObject = { maxCeremonyId: maxCeremonyId };
                nextId = maxCeremonyId;
                break;
            default:
                return -1;
        }

        Sequence.updateOne({ _id: sequenceId }, { $set: updateObject }).catch(
            (err) => {
                console.log("nextId error = " + err);
                return null;
            }
        );

        return nextId;

    } catch (err) {
        console.error(err)
        process.exit(1)
    }
};

module.exports = new SequenceGenerator();