import React from 'react'

export default function SmallComponent(props) {

    console.log(props)
  return (
    <div>
        <h1>This a header component for {props.item}</h1>
        <p>This is a paragraph for {props.item}</p>
    </div>
)
}
