import React from 'react'
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './DialogMessage/DialogMessage'

const Dialogs = (props) => {

    let messagesElements = props.state.messages.map(m => <MessageItem message={m.message} id={m.id} />)
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

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