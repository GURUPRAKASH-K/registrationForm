import React from 'react'
import { Link } from 'react-router-dom'
export default function Base() {
  return (
    <div>
    <nav>
    <Link to="/home">LOG IN</Link>
    <br></br>
    <Link to="/about">SIGN IN</Link>
    </nav>
    </div>
  )
}
