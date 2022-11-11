const mongoose=require("mongoose");

const todoSchema=new mongoose.Schema({
    id:String,
    title:String,
    description:String,
    status:Boolean
},{
    versionKey:false,
    timestamps:true
})


const todoModel=mongoose.model("todo", todoSchema, "todo");


module.exports=todoModel;