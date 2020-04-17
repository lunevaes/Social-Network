import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
  return (
    <div className={classes.Post}>
      <span className={classes.Topic}>{ props.topic }</span>
      <p className={classes.Text}>{ props.text }</p>
    </div>
  )
}

export default Post
