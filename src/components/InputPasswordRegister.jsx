import React from 'react'

function InputPasswordRegister(props) {
  const { onChangePassword } = props
  return (
    <div>
      <div>
        <label htmlFor="password-login">Password</label>
      </div>
      <div>
        <input type="password" className="password-login" onChange={onChangePassword} />
      </div>
    </div>
  )
}
export default InputPasswordRegister
