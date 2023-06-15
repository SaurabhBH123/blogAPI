const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { userRouter } = require("./routes/user.routes")


const app = express()

app.use(express.json())
app.use(cors())

app.use("/",userRouter)
app.listen(8080,async()=>{
    try {
        await mongoose.connect(`mongodb+srv://bhandarisaurabh:bhandarisaurabh@cluster0.k9ntg6n.mongodb.net/blogAPI?retryWrites=true&w=majority`)
        console.log("connected to DB")
    } catch (error) {
        console.log(error)
    }
    console.log("server is running at 8080")
})