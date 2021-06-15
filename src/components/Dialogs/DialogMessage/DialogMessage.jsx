import React from 'react'
import style from './DialogMessage.module.css'

const DialogMessage = (props) => {
    return(
        <div className={style.messageItems}>
            <span className={style.messageRecipient}>
                <p>{props.message}</p>
            </span>
            <span className={style.messageSender}>
                <p>{props.message}</p>
            </span>
        </div>
    )
}

export default DialogMessage