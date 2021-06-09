import React from 'react'
import Post from './Post/Post'
import style from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div>
          My Posts
          <div>
            New Posts
          </div>
          <div className="posts">
           <Post message='Hi, how are you ?' like='5' />
           <Post message='It`s my first post ?' like='12' />
          </div>
        </div>
    )
}

export default MyPosts