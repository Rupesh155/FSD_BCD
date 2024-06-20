import React, { useState } from 'react'
import axios from 'axios'
const Singup = () => {
    let [input,SetInput]=useState({
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
  
       
    }
  return (
    <div>
        <form onSubmit={done}>

      
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