const mongoose = require("mongoose");
const connectionString='mongodb+srv://asherazali121823:ali121823@cluster0.yzsrcdh.mongodb.net/';
const dbFunction =async ()=>{
try {
   await mongoose.connect(connectionString);
    console.log("Connected");
    
} catch (error) {

       console.log("Not Connected",error);
}   

}
module.exports=dbFunction