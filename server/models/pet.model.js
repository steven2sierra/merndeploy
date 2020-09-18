const mongoose = require("mongoose");
const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "pets's name must be three characters or longer"]
},
    type: {
        type: String,
        required: [true, "Type is required"],
        minlength: [3, "pet's type must be three characters or longer"]
},
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [3, "pet's description must be three characters or longer"]
},
    skillOne: {
        type: String
},
    skillTwo: {
        type: String
},
    skillThree: {
        type: String
}
}, {timestamps: true});

module.exports.Pet = mongoose.model('Pet', PetSchema);