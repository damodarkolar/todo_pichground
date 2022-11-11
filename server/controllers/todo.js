const express=require("express");
const todoRouter=express.Router();
const todoModel=require("../dataBase/models/todoModel.js");
const { uuid } = require('uuidv4');


todoRouter.get("/list",async(req, res)=>{
    let page=req.query
    
    console.log(typeof +page.page)

    let data=await todoModel.find().skip((+page.page-1)*8).limit(8);
    

    return res.send(JSON.stringify(data))
});


todoRouter.get("/:id", async(req, res)=>{
    let id=req.params;
    let todo=await todoModel.findById(id.id);
    return res.send(JSON.stringify(todo));
})

todoRouter.post("/create", async(req, res)=>{
    let data=req.body;
    data.id=uuid();
    let todo=JSON.stringify(data)
   let info=await todoModel.insertMany([data])
   
    return res.status(200).send(JSON.stringify("New Todo Created"))
});

todoRouter.delete("/remove/:id", async(req, res)=>{
    let id=req.params;
    await todoModel.findByIdAndDelete(id.id);
    return res.status(200).send("Todo Deleted");
});

todoRouter.post("/update/:id", async(req, res)=>{
    let id=req.params;
    let data=req.body;
    await todoModel.findByIdAndUpdate(id.id,data);

    return res.status(200).send("todo Updated")

})


module.exports=todoRouter;