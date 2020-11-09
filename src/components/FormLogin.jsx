import Cookies from 'js-cookie'
import React, { Fragment, useState } from 'react'
import Axios from 'axios'
import InputLogin from './InputLogin'
import InputPassword from './InputPassword'
import Buttonsubmit from './ButtonSubmit'

function FormLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleOnChangeEmail(e) {
    setEmail(e.target.value)
  }
  function handleOnChangeLogin(e) {
    setPassword(e.target.value)
  }

  function handleSubmit() {
    const data = {
      email,
      password,
    }
    const url = 'http://localhost:3000/login'
    Axios.post(url, data).then(
      (response) => {
        Cookies.set('token', response.data.accessToken)
      })
  }

  return (
    <Fragment>
      <InputLogin onChangeLogin={handleOnChangeEmail} />
      <InputPassword onChangePassword={handleOnChangeLogin} />
      <Buttonsubmit handleClick={handleSubmit} />
    </Fragment>
  )
}

export default FormLogin
