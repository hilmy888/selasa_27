import React from 'react'
import { useDispatch } from 'react-redux'

function Button() {
  const dispatch = useDispatch()

  function handleClick() {
    const action = { type: 'toggle' }
    dispatch(action)
    console.log(action)
  }
  return (
    <div>
      <button type="button" onClick={handleClick}>
        Toggle
      </button>
    </div>
  )
}

export default Button
