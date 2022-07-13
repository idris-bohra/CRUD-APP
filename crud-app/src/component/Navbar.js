import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">U-SEE</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link className= 'nav-link' to="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link className= 'nav-link' to="/users">Users</Link>
        </li>
        <li class="nav-item">
        <Link className= 'nav-link' to="/adduser">Add User</Link>
        </li>
        <li class="nav-item">
        <Link className= 'nav-link' to="/aboutus">About Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
    </>
  )
}
