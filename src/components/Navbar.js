import React from 'react'

import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <ul>
    <li><Link to="/main/about">Go To About Page</Link></li>
    <li><Link to="/main/contact">Go To Contact Page</Link></li>
    <li><Link to="/main/home">Go To Home Page</Link></li>
  </ul>
  )
}
