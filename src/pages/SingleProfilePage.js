import React from 'react'
import { useLocation } from 'react-router-dom'

export default function SingleProfilePage() {

    const location = useLocation()

    console.log(location)

  return (
    <div>
        <h1>SingleProfilePage</h1>
        <br />
        <h3>{location.state.profile.firstname} {location.state.profile.lastname}</h3>
        <p>{location.state.profile.age}</p>
        <p>{location.state.profile.email}</p>
    </div>
  )
}
