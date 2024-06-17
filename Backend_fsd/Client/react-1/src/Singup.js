import React, { useState } from 'react'
import axios from 'axios'
const Singup = () => {
    let [input,SetInput]=useState({
        firstName:"",
        lastName:"",
        email:"",
        passWord:""

    })

    function fun1(e){
        let {name,value}= e.target
        SetInput({...input,[name]:value})
    }

    // let done = async()=>{

    // }
    async  function done(e){
        e.preventDefault();
            console.log('chilclclc');
          let res=   await  axios.post('http://localhost:5000/signup',input)
          if(res.data=='ho gyaa signupppp'){
            alert('signup done')
          }
  

   
          console.log(res,"heheheheheh");

        // console.log('ehehe',input);
       
    }
  return (
    <div>
        <form onSubmit={done}>
        <input  name='firstName' value={input.firstName} onChange={fun1}  type='text' placeholder='Enter your name'/>
        <br/>
        <br/>

        <input   name='lastName' value={input.lastName} type='text'  onChange={fun1} placeholder='Enter your lastname'/>
        <br/>
        <br/>
        <input   name='email' value={input.email} type='email'  onChange={fun1} placeholder='Enter your gmail'/>
        <br/>
        <br/>
        <input    name='passWord' value={input.passWord}  type='passWord'  onChange={fun1} placeholder='Enter your gmail' />
        <br/>
        <br/>
        <button type='submit'> add</button>
        </form>
    </div>
  )
}

export default Singup