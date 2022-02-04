import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => {
  return (
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/">
        <i>FED</i>
      </a>
      <div className="navbar-nav">
        <Link className="nav-link px-3" to="/login">
          Login as admin
        </Link>
      </div>
    </header>
  )
}

export default Header
