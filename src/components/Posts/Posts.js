import React from 'react'

import { addPost } from '../../redux/state';
import Post from './Post/Post'
import classes from './Posts.module.css'



const Posts = (props) => {
  let posts = props.state.posts.map((post) => {
    return (<Post topic={post.topic} text={post.text}/>)
  })

  let newPost = React.createRef()
  let addNewPost = () => {
    let text = newPost.current.value
    addPost(text)
    newPost.current.value = ''
  }


  return (<div className={classes.Posts}>
    <textarea className="textarea" ref={newPost}></textarea>
    <button className="button" onClick={addNewPost}>Добавить пост</button>
    {posts}
  </div>)
}

export default Posts
