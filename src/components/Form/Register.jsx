import React from 'react'
import { useForm } from 'react-hook-form'
import { registerUser} from '../../services/api'

export default function FormRegister() {
  const { register, handleSubmit } = useForm()

  return (
    <form onSubmit={handleSubmit(registerUser)}>
      <div>
        <label>Email</label>
        <input type="text" name="email" ref={register} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" ref={register} />
      </div>
      <button type="submit">Register</button>
    </form>
  )
}
