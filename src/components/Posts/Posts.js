import React from 'react'
import Post from './Post/Post'
import classes from './Posts.module.css'


const Posts = (props) => {
  return (
    <div className={classes.Posts}>
      <h2>Новости</h2>
      <Post topic="Понедельник" text="Дождь"/>
      <Post topic="Вторник" text="Солнечно"/>
      <Post topic="Среда" text="Пасмурно"/>
    </div>
  )
}

export default Posts
