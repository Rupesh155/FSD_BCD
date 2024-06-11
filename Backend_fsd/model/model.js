let mongoose=   require('mongoose')

let userSchema=  mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    passWord:{
        type:String

    }

})
let User=  mongoose.model('User',userSchema)
module.exports=User