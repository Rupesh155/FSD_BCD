let  express= require('express')

let app= express()

app.use((req,res,next)=>{
    console.log('hellloooooo');
  
    next()
    res.send('SPG 1')

})
app.use((req,res,next)=>{
    console.log('hiiiiiiiiiiii');
    req.user='hello yogi jii'
    
    next()
    res.send('spg 2')

})

app.get('/',(req,res)=>{
    res.send('USERR ')

})
app.get('/user',(req,res)=>{
    res.send(`modi ji ${req.user}`)

})

app.listen(5000,()=>{
    console.log('server chal gyaaaa');

})


