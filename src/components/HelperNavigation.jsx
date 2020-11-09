import React from 'react'
import { Link } from 'react-router-dom'

function HelperNavigation() {
  const arrNav = [
    ['/', 'Home'],
    ['/login', 'Login'],
    ['/register', 'Register'],
    ['/posts', 'Posts'],
  ]
  return (
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link> */}
      { arrNav.map(([path, title]) => (<Link key={path} to={path}>{title}</Link>)) }
    </nav>
  )
}
export default HelperNavigation
