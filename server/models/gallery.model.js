const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
    tag:{
        type:String,
        require:true
    },
    img:{
        type:String,
        require:true
    }
},{timestamps:true});

module.exports = mongoose.model("gallery",gallerySchema);