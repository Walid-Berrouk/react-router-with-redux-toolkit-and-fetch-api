import React, { useEffect, useState } from 'react'

export default function SubComponent(props) {

  const [count, setCount] = useState(0)


  useEffect(() => {
    console.log("Count changed !")
  }, [count])

  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
