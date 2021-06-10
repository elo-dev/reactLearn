import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Dialogs.module.css'

const DialogItem = (props) => {
    return(
        <div className={style.dialog}>
            <NavLink to="/dialogs/1">{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props) => {
    return(
        <div className={style.messageItems}>
            <p>{props.message}</p>
        </div>
    )
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Alina'}
    ]

    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'HI'},
        {id: 3, message: 'What'}
    ]

    let messagesElements = messages.map(m => <MessageItem message={m.message} id={m.id} />)
    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

    return(
        <div className={style.wrapperDialogs}>

            <div className={style.usersDialogs}>
                <h2>Dialogs</h2>
                {dialogsElements}
            </div>

            <div className={style.messagesDialogs}>
                <h2>Messages</h2>
                {messagesElements}
            </div>

        </div>
    )
}

export default Dialogs