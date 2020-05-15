import {BrowserRouter, Route} from 'react-router-dom'
import React from 'react'
import Footer from './containers/Footer/Footer'
import Header from './containers/Header/Header'
import Messages from './components/Messages/Messages'
import PostsContainer from './components/Posts/PostsContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import classes from './App.module.css'

const App = (props) => {
  return (<div className={classes.App}>
    <BrowserRouter>
      <Header/>
      <div className={classes.Body}>
        <div className={classes.Wrapper}>
          <Route path='/profile' render={() => <ProfileContainer store={props.store}/>}/>
          <Route path='/messages' render={() => <Messages store={props.store}/>}/>
          <Route path='/posts' render={() => <PostsContainer store={props.store}/>}/>
        </div>
      </div>
      <Footer/>
    </BrowserRouter>
  </div>);
}

export default App;
