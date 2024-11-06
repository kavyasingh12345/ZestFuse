const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname : String ,
    email : String ,
    password : String ,
    // isadmin : {
    //     type : Array,
    //     default : []
    // },
    orders : {
        type : Array,
        default : []
    },
    contact : Number,

})


//   const User = mongoose.models.User || mongoose.model("User", userSchema);
//   module.exports = User;
module.exports = mongoose.model("user",userSchema);