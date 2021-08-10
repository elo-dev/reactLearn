import React from 'react'
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './DialogMessage/DialogMessage'
import { Redirect } from 'react-router-dom'
import { Field, Form } from 'react-final-form'
import formControl from '../../hoc/formControl'
import { composeValidators, maxLength, required } from '../../utils/validators/validators'

const Dialogs = (props) => {

    let state = props.dialogsPage

    let messagesElements = state.messages.map(m => <MessageItem key={m.id} message={m.message} id={m.id} />)
    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />)

    let addMessage = (value) => {
        props.addMessage(value.messageBody)
    }

    if(!props.isAuth) return <Redirect to={'/login'} />

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
                <MessageForm addMessage={addMessage} />
            </div>
        </div>
    )
}

const MessageForm = (props) => {

    const Textarea = formControl('textarea')

    return(
        <Form onSubmit={props.addMessage}>
        {({handleSubmit, pristine, submitting}) => (
            <form onSubmit={handleSubmit} >
                <Field className={style.textAreaMessage} component={Textarea} placeholder={'Введите сообщение'} name={'messageBody'} validate={composeValidators(required, maxLength(100))} />
                <button type={'submit'} disabled={pristine || submitting} className={style.btnAddNewMessage}>Отправить</button>
            </form>
        )}
        </Form>
    )
}

export default Dialogs