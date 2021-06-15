import React from 'react'
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogsReducer'
import StoreContext from '../../StoreContext'
import Dialogs from './Dialogs'


const DialogsContainer = () => {

    return <StoreContext.Consumer>
        { (store) => {

            let addMessage = () => {
                store.dispatch(addMessageActionCreator())
            }

            let onMessageChange = (text) => {
                store.dispatch(onMessageChangeActionCreator(text))
            }

            return <Dialogs onMessageChange={onMessageChange}
                        addMessage={addMessage}
                        dialogsPage={store.getState().dialogsPage} />
            }
        }
        </StoreContext.Consumer>
}

export default DialogsContainer