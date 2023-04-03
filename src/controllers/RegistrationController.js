const Registration = require("../models/registration");


module.exports = {
    async create (req, res){

        const{user_id} = req.params;
        const {eventId} = req.headers;
        const {date} = req.body;



        const registration = await Registration.create ({
            user:user_id,
            event: eventId,
            date: date

        })

        // GIVING AN ERRROR
        await registration
        .populate("event")
        .populate("user")
        .execPopulate();


        return res.json(registration)
    }
};


