import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ButtonLogOut from './ButtonLogOut'

const styling = {
  width: '150px',
  position: 'fixed',
  right: 10,
  bottom: 10,
}

function NavigationHelper() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  return (
    <nav style={styling}>
      {!isLoggedIn && <Link to="/login">Login</Link>}
      {!isLoggedIn && <Link to="/register">Register</Link>}
      {isLoggedIn && <ButtonLogOut />}
    </nav>
  )
}

export default NavigationHelper
