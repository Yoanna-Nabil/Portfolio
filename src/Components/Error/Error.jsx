import React from 'react'
import style from './Error.module.css'
import { NavLink } from 'react-router-dom'

export default function Error() {
  return (
    <div className={`${style.error} d-flex justify-content-center align-items-center `}>
        <h2>No Words Found , Return to <NavLink className='text-decoration-none border text-primary px-2' to={""}>Home</NavLink></h2>
    </div>
  )
}
