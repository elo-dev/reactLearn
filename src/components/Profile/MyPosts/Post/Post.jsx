import React from 'react'
import style from './Post.module.css' 

const Post = (props) => {
    return (
            <div className={style.postItem}>
              <div>
                {props.message}
                <span className={style.like}> {props.like}</span>
              </div>
            </div>
    )
}

export default Post