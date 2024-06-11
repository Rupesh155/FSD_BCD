let express=   require('express')
let mongoose=   require('mongoose')
let User=require('./model/model')
let bcrypt=   require('bcrypt')
let jwt=require('jsonwebtoken')
mongoose.connect('mongodb://127.0.0.1:27017/fsd78').then(()=>{
    console.log('chal gyaa');
}).catch(()=>{
    console.log('kuch to sahi nhi....');

})

let app=  express()
app.use(express.json())

app.get('/',(req,res)=>{
    
    // res.send('ehhe')
})

app.post('/signup', async(req,res)=>{
    console.log(req.body);
    let userData=req.body
    let {email}=req.body
    let user=    await  User.findOne({email})
     console.log(user);
     if(user){
        res.send('user jinda hai ')
     }
     else{
          userData.passWord=    await  bcrypt.hash(userData.passWord,10)
          console.log(userData.passWord);
           let dbUser=  new User({
            firstName:userData.firstName,
            lastName:userData.lastName,
            email:userData.email,
            passWord:userData.passWord
          })
   
   

          await dbUser.save()
        
          res.send('ho gyaa signupppp')


        //   res.send('createdddd')
     }


    // res.send('hehe')


})


// login  api

 app.post('/login', async(req,res)=>{
    console.log(req.body);
    let userInfo=req.body
      let loginData=   await User.findOne({email:userInfo.email})
      if(!loginData){
        res.send('user nhi milaaaa ')
      }
      else{
        // res.send('koi mil gyaa')
        let validPass=    await  bcrypt.compare(userInfo.passWord,loginData.passWord)
        if(!validPass){
            res.send('invalid password')
        }
        else{
            let data=JSON.stringify(loginData)
            let   token=  jwt.sign(data,'JHSBFIWUGFWIGRFWIPGEU')
            console.log(token,"toeknnn");
            res.send({token,loginData})
        }
      }


 })









app.listen(5000,()=>{
    console.log('serverrrr');
})