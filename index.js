const express =require("express")
const booksRoute = require("./")

const app = express()
//middleware
app.use(express.json())

//home route
app.get("/", (req, res)=>{
    res.json("welcome to our library")
})


const PORT = 8000;



app.listen(PORT, ()=>{
    console.log("server is working")
})