import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Map from './Map'
const Main = () => (
    <Switch>
      <Route exact path='/' component={Map}/>
    </Switch>
)

export default Main
