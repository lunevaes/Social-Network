import React from 'react'
import Post from './Post/Post'
import classes from './Posts.module.css'

let postsArray = [
  {
    topic: "Понедельник",
    text: "Дождь"
  },
  {
    topic: "Вторник",
    text: "Солнечно"
  },
  {
    topic: "Среда",
    text: "Пасмурно"
  },
]

let posts = postsArray.map((post) => {
  return (
    <Post topic={post.topic} text={post.text} />
  )
})

const Posts = (props) => {
  return (
    <div>
      { posts }
    </div>

  )
}

export default Posts
