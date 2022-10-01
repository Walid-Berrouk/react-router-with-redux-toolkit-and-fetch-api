import React from 'react'

import { useSelector, useDispatch  } from 'react-redux'
import { increment, decrement, incrementByValue } from '../redux/slices/counter'
import { logIn, logOut } from '../redux/slices/logger'

export default function SubComponent(props) {

  const counter = useSelector(state => state.counter)
  const logger = useSelector(state => state.logger)

  const dispatch = useDispatch()


  return (
    <div>
        <h1>Count : {counter.value}</h1>
        <button onClick={() => dispatch(increment())}>Inc</button>
        <button onClick={() => dispatch(decrement())}>Dec</button>
        <button onClick={() => dispatch(incrementByValue(10))}>Inc By 10</button>


        <h1>isLogged : {logger.isLogged ? "true" : "false"}</h1>
        <button onClick={() => dispatch(logIn())}>Log In</button>
        <button onClick={() => dispatch(logOut())}>Log Out</button>
    </div>
  )
}
