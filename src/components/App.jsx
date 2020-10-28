import React, { Fragment } from 'react'
import ButtonKlik from './ButtonKlik'
import InputAge from './InputAge'
import InputGender from './InputGender'
import InputNama from './InputNama'

function App() {
  return (
    <Fragment>
      <form>
        <InputNama />
        <InputAge />
        <InputGender />
      </form>
      <ButtonKlik />
    </Fragment>
  )
}
export default App
