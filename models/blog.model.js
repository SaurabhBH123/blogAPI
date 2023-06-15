const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    title:String,
    content:String,
    category:String,
    date:String,
    userID:String
})

const BlogModel = mongoose.model("blog",blogSchema)

module.exports={BlogModel}