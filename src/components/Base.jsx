import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import Login from '../screens/Login'
import Home from '../screens/Home'
import Register from '../screens/Register'
import HelperNavigation from './HelperNavigation'
import Posts from '../screens/Posts'
// import { Provider } from 'react-redux'

function Base() {
  const isLogin = true
  return (
    <div>
      <Router>
        <HelperNavigation />
        <Switch>
          <Route exact path="/">
            {
              isLogin
                ? (<Home />)
                : (<Redirect to="/login" />)
            }
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
export default Base
