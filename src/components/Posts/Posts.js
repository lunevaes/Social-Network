import React from 'react'
import Post from './Post/Post'
import classes from './Posts.module.css'

const Posts = (props) => {
  let posts = props.posts.map((post) => {
    return (<Post topic={post.topic} text={post.text}/>)
  })

  return (<div className={classes.Posts}>
    {posts}
  </div>)
}

export default Posts
