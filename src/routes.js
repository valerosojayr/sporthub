const express = require ("express");
const multer = require ("multer"); //must be under the express

const UserController = require ("./controllers/UserController")
const EventController = require ("./controllers/EventController")
const DashboardController = require ("./controllers/DashboardController")
const uploadConfig = require("./config/upload")
const LoginController = require("./controllers/LoginController");
const Registration = require ("./controllers/RegistrationController");

const routes = express.Router();
const upload = multer (uploadConfig);



routes.get("/status", (req, res)=>{
    res.send ({status:200});
})

routes.get("/user/register", (req, res)=>{
    res.send ("First Route");
})





//REGISTRATION ROUTE
routes.post ("/registration/:eventId", Registration.create );

//LOGIN CONTROLLER
routes.post ("/login", LoginController.store);

//USER
routes.post ("/user/register", UserController.createUser);
//my issue before, i forgot to put back slash before the user.
routes.get("/user/:userId", UserController.getUserById);

//Dashboard 
routes.get("/dashboard/:sport", DashboardController.geteventbySport);
routes.get("/dashboard", DashboardController.getAllEvents);
routes.get('/event/:eventId', DashboardController.getEventById);

//Event
routes.post('/event', upload.single("thumbnail"), EventController.createEvent);
routes.delete('/event/:eventId', EventController.delete);

module.exports = routes;