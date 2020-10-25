import React from 'react'
import { Link } from 'react-router-dom'

const styling = {
  width: '150px',
  position: 'fixed',
  right: 10,
  bottom: 10,
}

export default function NavigationHelper() {
  return (
    <div style={styling}>
      <Link to="/" > Home </Link>
      <Link to="/login" > Login </Link>
      <Link to="/register" > Register </Link>
    </div>
  )
}
