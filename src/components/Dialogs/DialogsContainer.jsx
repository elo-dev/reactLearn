import React from 'react'
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let onMessageChange = (text) => {
        props.store.dispatch(onMessageChangeActionCreator(text))
    }

    return(
        <Dialogs onMessageChange={onMessageChange} addMessage={addMessage} dialogsPage={state} />
    )
}

export default DialogsContainer