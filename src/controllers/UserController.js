const User = require ("../models/user");
const bcrypt = require ("bcryptjs");


module.exports = {

async createUser (req, res){

try{
    console.log (req.body);

    const{firstName, lastName, password, email} = req.body;

    const existentUser = await User.findOne({email});


    if (!existentUser){

        const hashedPassword = await bcrypt.hash(password, 10) 

        const user = await User.create ({
            firstName : firstName,
            lastName: lastName,
            password: hashedPassword,
            email: email
        });
        return res.json (user);

    }//end of if condition

    else if (existentUser){
        return res.status(400).json({
            message: "email/user already exist! Do  you want to login instead?"
        })  

    }//end of else if condition



}
catch(error){
    throw Error (`Error while registering a new user: ${error}`);
}

},//end of createUser function, there  should be no semi colon here or else it will give an error unless you add another  async function.
 //now wee are adding comma because we will be adding another asysnc function for our UserController.js


 async getUserById(req, res){
    const {userId} = req.params;
    //userId is our parameter in our route
    try{
        const user =  await User.findById(userId);
        return res.json(user);
    }
    catch(error){
        return res.status(400).json({
        message: "User ID does not exist. Do you want to register?"
    })
    }
}




};//end of module.exports














































