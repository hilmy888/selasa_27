import React from 'react'
import { useDispatch } from 'react-redux'

function InputName() {
  const dispatch = useDispatch()

  function OnInputChange(e) {
    const action = {
      type: 'changeName',
      name: e.target.value,
    }
    dispatch(action)
  }
  return (
    <div>
      <input type="input" onChange={OnInputChange} />
    </div>
  )
}
export default InputName
