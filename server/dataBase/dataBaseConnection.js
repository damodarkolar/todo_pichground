const mongoose=require("mongoose");
const uri="mongodb://0.0.0.0:27017/todo-pichground";


const mongooseConnection=mongoose.connect(uri);




module.exports=mongooseConnection;