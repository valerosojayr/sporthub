const mongoose = require ("mongoose");

const EventSchema = new mongoose.Schema ({
    title: String,
    description: String,
    price: Number,
    thumbnail: String, //we are not going to save the image on the database but just the url of the image that we'll store in our app
    sport: String,
    date: Date,
    //We wanted this event schema related to our User. Who created this event.
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    },
    {
        toJSON:{
            virtuals: true
        }


        

});//End of Event Schema

EventSchema.virtual("thumbnail_url").get(function(){return `http://localhost:3000/files/${this.thumbnail}`});


module.exports = mongoose.model ("Event", EventSchema);


