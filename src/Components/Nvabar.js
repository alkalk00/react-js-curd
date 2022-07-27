import React from 'react'
import { Outlet, Link } from "react-router-dom";


const Nvabar = () => {
  return (
    <div className='link'>
        <h3>Add Students</h3>
      <nav>
        <li>
            <Link to="/addform">Add Student</Link>
        </li>
      </nav>
      <Outlet />
    </div>
  )
}

export default Nvabar