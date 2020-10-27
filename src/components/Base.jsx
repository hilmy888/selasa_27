import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import NavigationHelper from './NavigationHelper'
import Home from '../screens/Home'
import Login from '../screens/Login'
import Register from '../screens/Register'
import Secured from './Secured'
import RedirectLogin from './RedirectLogin'

export default function Base() {
  return (
    <Router>
      <NavigationHelper />
      <Switch>
        <Route exact path="/">
          <Secured>
            <Home />
          </Secured>
        </Route>
        <Route path="/login">
          <RedirectLogin>
            <Login />
          </RedirectLogin>
        </Route>
        <Route path="/register">
          <RedirectLogin>
            <Register />
          </RedirectLogin>
        </Route>
      </Switch>
    </Router>
  )
}
