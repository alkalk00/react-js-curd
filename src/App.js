import React from 'react'
import Home from './Components/Home'
import Form from './Components/AddForm'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import Nvabar from './Components/Nvabar';
import UpdDetails from './Components/UpdDetails';

function App() {
  return (
    <div className='app container'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/addform" element={<Form />} />
          <Route path="/updform/:id" element={<UpdDetails />} />
        </Routes>
      </BrowserRouter>
           
    </div>
  )
}

export default App