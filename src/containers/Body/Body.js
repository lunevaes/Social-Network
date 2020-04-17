import {BrowserRouter, Route} from "react-router-dom"
import React from 'react'

import Messages from '../../components/Messages/Messages'
import Posts from '../../components/Posts/Posts'
import Profile from '../../components/Profile/Profile'
import classes from './Body.module.css'


const Body = () => {
  return (
    <BrowserRouter>
      <main className={classes.Body}>
        <div className={classes.Wrapper}>
          <Route path='/profile' component={Profile} />
          <Route path='/messages' component={Messages} />
          <Route path='/posts' component={Posts} />
        </div>
      </main>
    </BrowserRouter>
  )
}

export default Body
