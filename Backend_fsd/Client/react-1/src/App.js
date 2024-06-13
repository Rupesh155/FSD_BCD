import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Singup from './Singup'
import Login from './Login'
const App = () => {
  return (
    <Routes> 

  <Route  path='/'  element={<Singup/>}/>
  <Route path='/login'  element={<Login/>}/>
    </Routes>
  )
}

export default App