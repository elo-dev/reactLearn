import React from 'react'
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './DialogMessage/DialogMessage'

const Dialogs = (props) => {

    let messagesElements = props.dialogsPage.messages.map(m => <MessageItem message={m.message} id={m.id} />)
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

    let currentValueMessage = React.createRef()

    let addMessage = () => {
        props.addMessage()
    }

    let onMessageChange = () => {
        let text = currentValueMessage.current.value
        props.changeNewMessage(text)
    }

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

            <div className={style.newMessageWrapper}>
                <textarea className={style.textAreaMessage} ref={currentValueMessage} onChange={onMessageChange} value={props.dialogsPage.newMessageText} />
                <button className={style.btnAddNewMessage} onClick={addMessage}>Add message</button>
            </div>

        </div>
    )
}

export default Dialogs