const mongoose = require("mongoose");


const RegistrationSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    sport: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" //this User name came from Event Model
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event" //this Event  name came from Event Model
    },
});




module.exports = mongoose.model("Registration", RegistrationSchema)




