import React from 'react'
import { Link } from 'react-router-dom'

export default function ProfilesPage() {

    const profiles = [
        {
            id: 0,
            prenom: "Walid",
            nom: "Berrouk",
            age: 50,
            twt: "@walid",

        },
        {
            id: 1,
            prenom: "Rafik",
            nom: "tls",
            age: 50,
            twt: "@nano"
        },
        {
            id: 2,
            prenom: "Sami",
            nom: "tls",
            age: 50,
            twt: "@sm"
        }
    ]

    const profilesList = profiles.map(profile => (
        <div key={profiles.id} style={{padding: 20, border: "2px black solid", margin: 20}}>
            <h1>{profile.prenom}</h1>
            <p>{profile.twt}</p>
            <Link 
                to={`/main/profiles/${profile.prenom}`}
                state={{
                    profile
                }}
            >Go to Profile</Link>
        </div>
    ))

  return (
    <div>
        <h1>ProfilesPage</h1>
        {profilesList}
    </div>
  )
}
