import React from 'react'
import { Provider } from 'react-redux'
// import FormRegister from './FormRegister'
// import FormLogin from './FormLogin'
import Base from './Base'
import store from '../Store'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Base />
      </div>
    </Provider>
  )
}
export default App
