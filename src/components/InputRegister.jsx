import React from 'react'

function InputRegister(props) {
  const { onChangeLogin } = props
  return (
    <div>
      <div>
        <label htmlFor="email-login">Email</label>
      </div>
      <div>
        <input type="email" className="email-login" onChange={onChangeLogin} />
      </div>
    </div>
  )
}
export default InputRegister
