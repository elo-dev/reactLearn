import React from 'react'
import style from './DialogMessage.module.css'

const MessageItem = (props) => {
    return(
        <div className={style.messageItems}>
            <p>{props.message}</p>
        </div>
    )
}

export default MessageItem