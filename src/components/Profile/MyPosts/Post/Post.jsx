import React from 'react'
import style from './Post.module.css' 

const Post = (props) => {
    return (
            <div className={style.postItem}>
              {props.message}
              <span className={style.like}> {props.like}</span>
            </div>
    )
}

export default Post