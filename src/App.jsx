
import { useState } from 'react'
import './App.css'
import UserData from "./from component/UserData"
import BalanceTracker from './banlance-tracker/balanceTracker'
import MainCard from './card/MainCard';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
 
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainCard/>}/>
      <Route path='/fromdata' element={<UserData/>}/>
      <Route path='/BanalceTracker' element={<BalanceTracker/>}/>

    </Routes>
   
   </BrowserRouter>
  )
}

export default App
