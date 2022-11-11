const express=require("express");
const port=8000;
const mongooseConnection=require("./dataBase/dataBaseConnection.js");
const app=express();
const todoRouter=require("./controllers/todo.js");
const cors=require("cors");


app.use(express.json());
app.use(cors());



app.get("/",(req, res)=>{

    console.log(req)

    res.send("hai")


})
app.use("/todo", todoRouter);







app.listen(port, ()=>{
    mongooseConnection
.then(()=>{
    console.log(`server started in port ${port}`);
    console.log("Data Base connected")
    })
.catch((err)=>{
    console.log(err.message)
})

    console.log(`server started in port ${port}`);
    console.log("Data Base connected")
})





