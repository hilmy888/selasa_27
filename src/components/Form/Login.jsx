import React from 'react'
import { useForm } from 'react-hook-form'
import { loginUser } from '../../services/api'

export default function FormLogin() {
  const {register, handleSubmit } = useForm()


  return (
    <form onSubmit={handleSubmit(loginUser)}>
      <div>
        <label>Email</label>
        <input type="text" name="email" ref={register} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" ref={register} />
      </div>
      <button type="submit">Login</button>
    </form>
  )
}
