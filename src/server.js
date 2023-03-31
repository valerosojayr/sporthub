const express = require ("express");
const multer = require ("multer");


const cors = require ("cors");
const mongoose = require("mongoose");
const routes = require ("./routes");
const path = require ("path");
mongoose.set("strictQuery", false);

const app = express();

app.use (cors());
app.use (express.json());


if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
};


try{
    mongoose.connect(process.env.MONGO_DB_Connection, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
}
catch(error){
    console.log(error);
}



app.use ("/files", express.static(path.resolve(__dirname, "..", "files")))
app.use(routes);//Can't access "app" before initialization. Make sure this syntax is in this order before the app.listen and port variable.


const PORT = process.env.PORT || 3000;
app.listen (PORT, ()=>{
    console.log (`Listening to Port ${PORT}`)
});