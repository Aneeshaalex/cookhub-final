const mongoose = require("mongoose");

const DB= "mongodb+srv://aliya:userone@cluster0.sq1mu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const InitiateMongoServer = async () =>{
    try{
        await mongoose.connect(DB,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connection established");
    }catch(e){
        console.log(e);
        throw e;
    }
};
module.exports = InitiateMongoServer;