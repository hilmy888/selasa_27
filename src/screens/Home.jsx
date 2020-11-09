import React from 'react'
import { useSelector } from 'react-redux'
import Button from '../components/Button'
import InputName from '../components/inputName'

function Home() {
  const isLogin = useSelector(state => state.auth.isloggeIn)
  const userName = useSelector(state => state.auth.user)
  return (
    <div>
      {
        isLogin ? 'Login' : 'Logout'
      }
      <br />
      {
        userName
      }
      <br />
      <InputName />
      <Button />
    </div>
  )
}
export default Home
