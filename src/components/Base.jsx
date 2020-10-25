import React, { Fragment, useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import NavigationHelper from './NavigationHelper'
import Home from '../screens/Home'
import Login from '../screens/Login'
import Register from '../screens/Register'
import user from '../services/user.js'

function Secured(children) {
  const [isLogin, setIsLogin] = useState(user.isLogin())

  useEffect(() => {
    if (user.isLogin()) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }, []);

  return (
    <Fragment>
      {isLogin ? children : (<Redirect to="/login" />)}
    </Fragment>
  )
}

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
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  )
}
