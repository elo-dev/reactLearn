import React from 'react'
import Post from './Post/Post'
import style from './MyPosts.module.css'

const MyPosts = () => {

  let posts = [
    {id: 1, message: 'Hi, how are you', like: 5},
    {id: 2, message: 'It`s my first post', like: 10},
    {id: 3, message: 'What it`s happen', like: 15}
  ]

  let postsElements = posts.map(p => <Post message={p.message} like={p.like} />)

    return (
        <div>
          My Posts
          <div>
            New Posts
          </div>
          <div className="posts">
           {postsElements}
          </div>
        </div>
    )
}

export default MyPosts