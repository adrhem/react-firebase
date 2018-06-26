import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <Link to="/" className="navbar-brand">React Course</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="main-navbar">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="/signup">Signup</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
