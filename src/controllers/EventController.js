const Event = require ("../models/event");
const User = require ("../models/user");

module.exports = {

    async createEvent (req, res) {

            //We have done object destructing to store the value we get from our req, from the body, header and file property.
            const {title, description, price, sport } = req.body;  //req.body is something the user or the person is entering on the web app.
            const {_id} = req.headers; //req.header the key pair that is autmatically created once we create a user or json object. _id is one of them.
                                       //i forgot to put s in the word header
            console.log(req.headers)
            const {filename} = req.file;

            const user = await User.findById(_id);  //There is no hearder for user_id so I use _id

            if (!user){
                return res.status(400).json({message: "User does not exist!"});
            }

            const event = await Event.create ({
                title,
                description,
                price, //no need to parseFlote here or else it will give the error.
                user:_id,
                thumbnail: filename,
                sport,
            });
            return res.json (event);



    },//createEVent End Syntax, do noto use semi colin here, only comma if you want to add another function.


    
async delete (req, res){
    const {eventId} = req.params; //eventId is teh paramer in our delete route.

    try{
         await Event.findByIdAndDelete(eventId)
        return res.status(204).send();
        
    }
    catch(error){
        return res.status(400).json({message: "We don't have any events yet with this ID."}) 
    }

}

    
        
}; //End Syntax of module.exports

