import React from 'react'
import { useForm } from 'react-hook-form'
import Axios from 'axios'

function FormLoginNew() {
  const { register, handleSubmit } = useForm()

  function onValid(data) {
    const url = 'http://localhost:3000/login'
    Axios.post(url, data)
  }

  return (
    <div className="card m-3">
      <div className="card-body">
        <form onSubmit={handleSubmit(onValid)}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" name="email" ref={register} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name="password" ref={register} />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  )
}
export default FormLoginNew
