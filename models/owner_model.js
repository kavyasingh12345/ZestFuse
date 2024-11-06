const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    canteen_name : String,
    fullname : String ,
    email : String ,
    password : String ,
    products : {
        type : Array,
        default : []
    },
    contact : Number,
    picture : String , 
    gstin : String ,

})

module.exports = mongoose.model("user",userSchema);