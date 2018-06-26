import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
const Main = () => (
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/login' component={Login}/>
      <Route path='/Signup' component={Signup}/>
    </Switch>
)

export default Main
