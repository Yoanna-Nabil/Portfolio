import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

  function navLinkActive({  isActive  }) {
    return {
      backgroundColor : isActive ? '#1abc9c' : '',
      borderRadius : isActive ? '5px' : '5px' ,
      textDecoration : isActive ? 'none' : 'none',
    }
  }



  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark position-fixed fixed-top py-4">
  <div className="container">
    <NavLink className="navbar-brand"  to={""}>Home</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink  style={navLinkActive} to={"about"} className="nav-link text-uppercase text-white ">about</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={navLinkActive} to={"portfolio"}  className="nav-link text-uppercase text-white">portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={navLinkActive} to={"contact"} className="nav-link text-uppercase text-white">contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}
