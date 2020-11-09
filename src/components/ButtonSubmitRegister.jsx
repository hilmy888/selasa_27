import React from 'react'

function ButtonSubmitRegister(props) {
  const { handleClick } = props
  return (
    <div>
      <button type="button" onClick={handleClick}>Register</button>
    </div>
  )
}
export default ButtonSubmitRegister
