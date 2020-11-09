import React from 'react'

function ButtonSubmit(props) {
  const { handleClick } = props
  return (
    <div>
      <button type="button" onClick={handleClick}>Login</button>
    </div>
  )
}
export default ButtonSubmit
