import React, { Fragment, useState } from 'react'
import Axios from 'axios'
import InputRegister from './InputRegister'
import InputPasswordRegister from './InputPasswordRegister'
import ButtonsubmitRegister from './ButtonSubmitRegister'

function FormLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleOnChangeRegisterEmail(e) {
    setEmail(e.target.value)
  }
  function handleOnChangeRegisterLogin(e) {
    setPassword(e.target.value)
  }

  function handleSubmitRegister() {
    const data = {
      email,
      password,
    }
    const url = 'http://localhost:3000/register'
    Axios.post(url, data)
  }

  return (
    <Fragment>
      <InputRegister onChangeRegister={handleOnChangeRegisterEmail} />
      <InputPasswordRegister onChangeRegisterPassword={handleOnChangeRegisterLogin} />
      <ButtonsubmitRegister handleClickRegister={handleSubmitRegister} />
    </Fragment>
  )
}

export default FormLogin
