import {BrowserRouter, Route} from 'react-router-dom'
import React from 'react'

import Footer from './containers/Footer/Footer'
import Header from './containers/Header/Header'
import MessagesContainer from './components/Messages/MessagesContainer.jsx'
import PostsContainer from './components/Posts/PostsContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import classes from './App.module.css'


const App = () => {
  return (<div className={classes.App}>
    <BrowserRouter>
      <Header/>
      <div className={classes.Body}>
        <div className={classes.Wrapper}>
          <Route path='/profile' render={() => <ProfileContainer/>}/>
          <Route path='/messages' render={() => <MessagesContainer/>}/>
          <Route path='/posts' render={() => <PostsContainer/>}/>
        </div>
      </div>
      <Footer/>
    </BrowserRouter>
  </div>);
}

export default App;
