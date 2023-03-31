const Event = require ("../models/event");
const User = require ("../models/user");

module.exports = {


    async getEventById (req, res){
        const {eventId} = req.params;//eventId is our paramter in our routes.js routes.get('/event/:eventId', EventController.getEventById);
    
            try{
                const event = await Event.findById (eventId)
                if(event){
                    return res.json(event)
                }
            }
            catch(error){
                return res.status(400).json({message: "EventId does not exist."}) 
            }
    },

    async getAllEvents (req, res){

            try{
                const events = await Event.find()
          
                if(events){
                    return res.json(events)
                
                }
            }
            catch(error){
                return res.status(400).json({message: "We don't have any events yet."}) 
            }
    },

    //route GET http://localhost:3000/events/EventNameHere  
    async geteventbySport (req, res){
        const {sport}  = req.params;
        const query = {sport} || {};

        try{
            const events = await Event.find(query)
            if(events){
                return res.json(events)
            }
        }
        catch(error){
            return res.status(400).json({message: "We don't have any events yet."}) 
        }
},

    


    
        
}; //End Syntax of module.exports

