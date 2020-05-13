import {BrowserRouter, Route} from 'react-router-dom'
import React from 'react'

import Footer from './containers/Footer/Footer';
import Header from './containers/Header/Header'
import Messages from './components/Messages/Messages';
import Dialog from './components/Messages/Dialog/Dialog';
import Posts from './components/Posts/Posts';
import Profile from './components/Profile/Profile';
import classes from './App.module.css'


const App = (props) => {
  return (<div className={classes.App}>
    <BrowserRouter>
      <Header/>
      <div className={classes.Body}>
        <div className={classes.Wrapper}>
          <Route path='/profile' render={() => <Profile state={props.state.profilePage}/>}/>
          <Route path='/messages' render={() => <Messages state={props.state.messagesPage}/>}/>
          <Route path='/posts' render={() => <Posts state={props.state.postsPage} dispatch={props.dispatch}/>}/>
        </div>
      </div>
      <Footer/>
    </BrowserRouter>
  </div>);
}

export default App;
