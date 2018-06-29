import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <nav className="row navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/" className="navbar-brand">React Course</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="main-navbar">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Map</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
