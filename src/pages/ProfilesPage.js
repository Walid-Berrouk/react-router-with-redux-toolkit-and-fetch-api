import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

// import { profiles } from '../shared/profiles'
import { useSelector, useDispatch } from 'react-redux'

import  { loadProfiles, addProfile } from '../redux/slices/profiles'

export default function ProfilesPage() {

    const profilesAccounts = useSelector(state => state.profiles)
    const dispatch = useDispatch()

    const profile = {
        id: 2,
        prenom: "Mourad",
        twt: "@mourad"
    }

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/Walid-Berrouk/fake-server-json/profiles")
       .then(res => res.json())
       .then(res => dispatch(loadProfiles(res)))
    }, [])

    console.log(profilesAccounts.profiles)

    const profilesList = profilesAccounts.profiles.map(profile => (
        <div key={profile.id} style={{padding: 20, border: "2px black solid", margin: 20}}>
            <h1>{profile.firstname}</h1>
            <p>{profile.lastname}</p>
            <Link 
                to={`/main/profiles/${profile.firstname}`}
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
        <button  onClick={() => dispatch(addProfile(profile))}>Add Mourad</button>
    </div>
  )
}
